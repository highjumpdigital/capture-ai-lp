"use client";
import { useEffect } from "react";

interface ExampleChatbotProps {
  chatbotId: string;
  autoOpen?: boolean;
  delay?: number;
}

const ExampleChatbot: React.FC<ExampleChatbotProps> = ({ 
  chatbotId, 
  autoOpen = false, 
  delay = 0 
}) => {
  console.log("chatbotId", chatbotId);
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if we need to reload with a different chatbot ID
    const currentChatbotId = window.v?.c;
    const needsReload = currentChatbotId && currentChatbotId !== chatbotId;

    if (needsReload) {
      console.log(`Switching chatbot from ${currentChatbotId} to ${chatbotId}`);
      // Close current chatbot and clear it
      if (window.voiceflow?.chat) {
        window.voiceflow.chat.close();
      }
      // Clear the window.v to force reload
      window.v = undefined;
    }

    // If chatbot is already loaded with the same ID, just handle the auto-open
    if (window.voiceflow?.chat && !needsReload && currentChatbotId === chatbotId) {
      console.log("Chatbot already loaded with same ID, handling auto-open");
      if (autoOpen) {
        console.log("Auto-open requested for existing chatbot");
        setTimeout(() => {
          console.log("Attempting to open existing chatbot");
          if (window.voiceflow?.chat) {
            window.voiceflow.chat.open();
            console.log("Chatbot opened successfully");
          }
        }, delay || 1000);
      }
      return;
    }

    const initializeChatbot = () => {
      const f = () =>
        fetch(`https://apis.cptr.ai/chatbot/settings/${chatbotId}`)
          .then(r => r.json())
          .catch(e => {
            console.error(`Failed to load chatbot settings for ${chatbotId}:`, e);
            throw e;
          });

      f().then(g => {
        const launchPayload = g.launchPayload || {};
        
        if (g.ga4MeasurementId && window.gtag) {
          window.gtag('get', g.ga4MeasurementId, 'client_id', (clientId: string) => {
            window.gtag!('get', g.ga4MeasurementId, 'session_id', (sessionId: string) => {
              launchPayload.ga4_client_id = clientId;
              launchPayload.ga4_session_id = sessionId;
              loadChatbotWidget();
            });
          });
        } else {
          loadChatbotWidget();
        }
        
        function loadChatbotWidget() {
          window.v = {
            c: chatbotId,
            p: g.projectId,
            d: g.delayMilliseconds,
            s: g.voiceflowStagingProduction,
            st: g.chatbotStatus,
            a: g.toggleAutoPopup,
            as: g.assistant,
            f: g.formExtensions,
            t: g.toggleProActiveMessage,
            m: g.proActiveMessage,
            md: g.proActiveMessageDelay,
            l: launchPayload,
          };

          if (window.v.st === 'inactive') {
            return;
          }

          const x = (window.v.f || []).map((e: any) => ({
            name: 'Forms',
            type: 'response',
            match: ({ trace: t }: any) =>
              t.type === 'Custom_Form' ||
              (t.payload && t.payload.name === e.voiceflowName),
            render: ({ trace: t, element: el }: any) => {
              const form = document.createElement('form');
              
              form.innerHTML = e.formHtml;
              
              form.addEventListener('submit', (ev: Event) => {
                ev.preventDefault();
                const fd: any = {};
                new FormData(form as HTMLFormElement).forEach((v, k) => {
                  fd[k] = v;
                });
                if (window.voiceflow?.chat) {
                  window.voiceflow.chat.interact({ type: 'complete', payload: fd });
                }
              });

              el.appendChild(form);
            },
          }));

          // Check if script is already loaded
          const existingScript = document.querySelector('script[src="https://cdn.voiceflow.com/widget-next/bundle.mjs"]');
          
          if (existingScript) {
            console.log("Voiceflow script already exists, using existing instance");
            // Script already loaded, try to load the chatbot directly
            if (window.voiceflow?.chat && window.v) {
              window.voiceflow.chat.load({
                verify: { projectID: window.v.p },
                url: 'https://general-runtime.voiceflow.com',
                versionID: window.v.s,
                voice: { url: 'https://runtime-api.voiceflow.com' },
                launch: {
                  event: {
                    type: 'launch',
                    payload: window.v.l,
                  },
                },
                assistant: {
                  ...window.v.as,
                  extensions: x,
                },
              }).then(() => {
                console.log("New chatbot loaded successfully with existing script");
                // Handle auto-open for examples
                if (autoOpen) {
                  console.log("Auto-open requested for new chatbot with existing script");
                  // For examples, always try to open
                  setTimeout(() => {
                    console.log("Attempting to open new chatbot with existing script");
                    if (window.voiceflow?.chat) {
                      window.voiceflow.chat.open();
                      console.log("New chatbot opened successfully with existing script");
                    } else {
                      console.log("New chatbot not available for opening with existing script");
                    }
                  }, delay || window.v?.d || 1000);
                }
                
                if (window.v?.t && window.v?.m && window.voiceflow?.chat) {
                  setTimeout(() => {
                    if (window.voiceflow?.chat) {
                      window.voiceflow.chat.proactive.clear();
                      window.voiceflow.chat.proactive.push({ 
                        type: 'text', 
                        payload: { message: window.v?.m || '' }
                      });
                    }
                  }, window.v?.md || 3000);
                }
              });
            }
          } else {
            console.log("Creating new Voiceflow script");
            const script = document.createElement('script');
            script.onload = () => {
              console.log("Voiceflow script loaded");
              if (window.voiceflow?.chat && window.v) {
                window.voiceflow.chat.load({
                  verify: { projectID: window.v.p },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: window.v.s,
                  voice: { url: 'https://runtime-api.voiceflow.com' },
                  launch: {
                    event: {
                      type: 'launch',
                      payload: window.v.l,
                    },
                  },
                  assistant: {
                    ...window.v.as,
                    extensions: x,
                  },
                }).then(() => {
                  console.log("New chatbot loaded successfully with new script");
                  // Handle auto-open for examples
                  if (autoOpen) {
                    console.log("Auto-open requested for new chatbot with new script");
                    // For examples, always try to open
                    setTimeout(() => {
                      console.log("Attempting to open new chatbot with new script");
                      if (window.voiceflow?.chat) {
                        window.voiceflow.chat.open();
                        console.log("New chatbot opened successfully with new script");
                      } else {
                        console.log("New chatbot not available for opening with new script");
                      }
                    }, delay || window.v?.d || 1000);
                  }
                  
                  if (window.v?.t && window.v?.m && window.voiceflow?.chat) {
                    setTimeout(() => {
                      if (window.voiceflow?.chat) {
                        window.voiceflow.chat.proactive.clear();
                        window.voiceflow.chat.proactive.push({ 
                          type: 'text', 
                          payload: { message: window.v?.m || '' }
                        });
                      }
                    }, window.v?.md || 3000);
                  }
                });
              }
            };
            script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
            script.type = 'text/javascript';
            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode?.insertBefore(script, firstScript);
          }
        }
      }).catch(error => {
        console.error(`Failed to load chatbot ${chatbotId}:`, error);
      });
    };

    // Initialize the chatbot
    initializeChatbot();

    // Cleanup function - only clean up on unmount, not on re-initialization
    return () => {
      // Only clean up if this is the last instance
      // We'll let the main Chatbot component handle the global cleanup
      console.log("ExampleChatbot unmounting");
    };
  }, [chatbotId, autoOpen, delay]);

  return null; // This component doesn't render anything visible
};

export default ExampleChatbot;
