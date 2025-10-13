"use client";
import { useEffect } from "react";

const Chatbot: React.FC = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if chatbot is already loaded to prevent duplicate loading
    if (window.voiceflow) return;

    const initializeChatbot = () => {
      const c = 'cHlUzZJx7dC';
      const f = () =>
        fetch(`https://apis.cptr.ai/chatbot/settings/${c}`)
          .then(r => r.json())
          .catch(e => {
            throw e;
          });

      f().then(g => {
        const launchPayload = g.launchPayload || {};
        
        if (g.ga4MeasurementId && window.gtag) {
          window.gtag!('get', g.ga4MeasurementId, 'client_id', (clientId: string) => {
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
            c: c,
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
                window.voiceflow!.chat.interact({ type: 'complete', payload: fd });
              });

              el.appendChild(form);
            },
          }));

          const script = document.createElement('script');
          script.onload = () => {
            window.voiceflow!.chat.load({
              verify: { projectID: window.v!.p },
              url: 'https://general-runtime.voiceflow.com',
              versionID: window.v!.s,
              voice: { url: 'https://runtime-api.voiceflow.com' },
              launch: {
                event: {
                  type: 'launch',
                  payload: window.v!.l,
                },
              },
              assistant: {
                ...window.v!.as,
                extensions: x,
              },
            }).then(() => {
              // Auto-opening disabled - commenting out auto-popup functionality
              /*
              if (window.v!.a) {
                const k = `chatbot_popup_shown_${c}`;
                const h = sessionStorage.getItem(k);

                if (!h) {
                  sessionStorage.setItem(k, 'true');
                  setTimeout(() => window.voiceflow!.chat.open(), window.v!.d || 10000);
                }
              }
              */

              // Proactive messages disabled - commenting out proactive functionality
              /*
              if (window.v!.t && window.v!.m) {
                setTimeout(() => {
                  window.voiceflow!.chat.proactive.clear();
                  window.voiceflow!.chat.proactive.push({
                    type: 'text',
                    payload: { message: window.v!.m }
                  });
                }, window.v!.md || 3000);
              }
              */
            });
          };
          script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
          script.type = 'text/javascript';
          const firstScript = document.getElementsByTagName('script')[0];
          firstScript.parentNode?.insertBefore(script, firstScript);
        }
      }).catch(error => {
        console.error('Failed to load chatbot:', error);
      });
    };

    // Initialize the chatbot
    initializeChatbot();
  }, []);

  return null; // This component doesn't render anything visible
};

export default Chatbot; 