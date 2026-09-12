import { useState } from "react";
import {MessageCircle,Send,X,RotateCcw} from "lucide-react";
import { chatbotResponses } from "../data/chatbotResponses";


//interface to describe each chat message
interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
  showEnquiry?: boolean;
}

function Chatbot() {

  //decides if  chatbot is open or close
  const [isOpen, setIsOpen] = useState(false);
  
  //stores the value of input from form
  const [input, setInput] = useState("");


//store chats during the interaction. set the first array as default
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 I'm the DroneTV Support Assistant. How can I help you today?",
    },
  ]);

 
  // Send message
  const handleSend = () => {
    const message = input.trim();
    if (!message) {
      return;
    }
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    // Find chatbot response to the user question
  const findResponse = (userMessage: string) => 
    {
      const question = userMessage.toLowerCase();

      //check the keywords in chatbotResponse matches wth the user question
      const matchedResponse = chatbotResponses.find((response) =>
          response.keywords.some((keyword) =>
            question.includes(keyword.toLowerCase()) 
          )
            
        );
        if (matchedResponse) {
          return matchedResponse;
        }

        return {
          response:
            "I'm sorry, I don't have an answer for that yet. Please try asking about our services, courses, training, registration, or contact information.",
          showEnquiry: false,
        };
  };

    const chatResponse = findResponse(message);

    const botMessage: Message = {
      id: Date.now() + 1,
      sender: "bot",
      text: chatResponse.response,
      showEnquiry: chatResponse.showEnquiry,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };



  // Reset conversation
  const handleReset = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Hello! 👋 I'm the DroneTV Support Assistant. How can I help you today?",
      },
    ]);

    setInput("");
  };

  // Open enquiry form
  const handleEnquiryClick = () => {
    setIsOpen(false);
    document.getElementById("contact")?.scrollIntoView({
      behavior:"smooth"
    });
  };

  return (
    <>
      {/* Chatbot button before opening the chatbot icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg transition hover:scale-105"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chatbot window after it is open */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[350px] flex-col rounded-2xl border border-white/10 bg-slate-950 text-white shadow-2xl">

          <div className="flex items-center justify-between bg-slate-900 px-4 py-4">
                <div>
                  <h3 className="font-semibold">
                    DroneTV Assistant
                  </h3>

                  <p className="text-xs text-slate-400">
                    Support & Enquiries
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Reset */}
                      <button
                        onClick={handleReset}
                        className="flex items-center gap-1 rounded-lg px-2 py-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                        title="Reset conversation">
                        <RotateCcw size={17} />

                        <span className="text-xs">
                          Reset
                        </span>
                      </button>

                      {/* Close */}
                      <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                        title="Close chatbot">
                        <X size={20} />
                      </button>

                </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4 ">

            {messages.map((message) => (
              <div
                key={message.id}

                //temperate literal to evaluate the message positioning
                className={`flex ${message.sender === "user"? "justify-end" : "justify-start"}`}>

               <div
                  className="max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ">

                  {/* each chat message */}
                  <p>{message.text}</p>

                  {/* Enquiry button only visible if the user ask for registration */}
                  
                    {message.showEnquiry && (
                      <button
                        onClick={handleEnquiryClick}
                        className="mt-3 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Submit an Enquiry
                      </button>
                    )}

                </div>
              </div>
            ))}

          </div>

          {/* user input */}
          <div className="border-t border-white/10 bg-slate-900 p-3">

            <div className="flex gap-2">

              <input
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Ask something..."
                className="flex w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />

              <button
                onClick={handleSend}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300"
               
              >
                <Send size={18} />
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;