import React, { useState } from "react";
import {
    ChatBubbleLeftRightIcon,
    XMarkIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid";
import * as content from "../data/content";
import { askGPT } from "../utils/askGPT";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const { chatBot } = content;
    const SUGGESTED_QUESTIONS = chatBot.suggestions;

    const handleSubmit = (e) => {
        e.preventDefault();
        handleBotResponse(question);
    };

    const handleBotResponse = async (q) => {
        setIsTyping(true);
        setQuestion("");

        try {
            const gptResponse = await askGPT(q);

            let parsed;
            try {
                parsed = JSON.parse(gptResponse);
            } catch (err) {
                parsed = { action: "answer", response: gptResponse };
            }

            if (parsed.action === "scroll" && parsed.target) {
                document.getElementById(parsed.target)?.scrollIntoView({ behavior: "smooth" });
                setResponse(`Navigating to the ${parsed.target} section...`);
            } else {
                setResponse(parsed.response || "I'm still learning. Try asking something else!");
            }
        } catch (err) {
            console.error("GPT error", err);
            setResponse("Oops! Something went wrong. Try again later.");
        } finally {
            setIsTyping(false);
        }
    };

    const showWelcome = !isOpen;

    return (
        <>
            {/* Welcome Bubble */}
            {showWelcome && (
                <div className="fixed bottom-24 right-4 sm:right-6 z-50 bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm shadow-lg animate-bounce max-w-[90%] sm:max-w-xs break-words">
                    👋 Hey! I’m here — Ask me something like "top projects"
                </div>
            )}

            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 sm:right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 sm:p-3.5 rounded-full shadow-lg transition"
            >
                {isOpen ? (
                    <XMarkIcon className="w-5 h-5" />
                ) : (
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                )}
            </button>

            {/* Chat Box */}
            {isOpen && (
                <div className="fixed bottom-20 right-4 sm:right-6 bg-white text-gray-800 rounded-lg shadow-xl p-3 sm:p-4 w-[90vw] sm:w-80 z-50 animate-fadeIn max-h-[60vh] overflow-y-auto">
                    <div className="flex items-center space-x-2 mb-2">
                        <SparklesIcon className="w-5 h-5 text-purple-500" />
                        <h4 className="font-bold text-purple-700 text-sm sm:text-base">Ask Me Anything</h4>
                    </div>

                    <p className="text-xs text-gray-500 mb-3">
                        Try asking: <span className="italic">"What are your top 3 projects?"</span>
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {SUGGESTED_QUESTIONS.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => handleBotResponse(q)}
                                className="text-[11px] sm:text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition"
                            >
                                {q}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-2">
                        <input
                            type="text"
                            placeholder="Ask a question..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white text-sm py-2 rounded hover:bg-purple-700 transition"
                        >
                            Ask
                        </button>
                    </form>

                    {isTyping && (
                        <div className="mt-3 flex items-center space-x-2 text-sm text-gray-600">
                            <span className="text-purple-500">🤖</span>
                            <span className="animate-pulse">Typing...</span>
                        </div>
                    )}

                    {response && !isTyping && (
                        <div className="mt-3 max-h-32 overflow-y-auto pr-2 text-sm text-gray-700 bg-gray-100 p-3 rounded flex items-start space-x-2">
                            <span className="text-purple-500">🤖</span>
                            <span className="whitespace-pre-line">{response}</span>
                        </div>
                    )}
                </div>
            )}


        </>
    );
};

export default ChatWidget;
