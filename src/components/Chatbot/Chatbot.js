import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

// Define your questions and answers
  // Keywords will be used to match user input
  const qaPairs = [
    {
      keywords: ['hi', 'hello', 'hey'],
      answer: "Hello! I'm Abhinav's portfolio assistant. How can I help you learn more about him? You can ask me about his 'skills', 'experience', 'projects', or even about 'Abhinav' himself."
    },
    {
      keywords: ['skills', 'skill', 'what are your skills', 'what skills do you have'],
      answer: "Abhinav's key skills include Public Speaking, UI/UX Designing, Team Management, Report writing, Critical thinking, WordPress Development, HTML, CSS, JS, and Article Writing."
    },
    {
      keywords: ['experience', 'work', 'jobs'],
      answer: "Abhinav has professional experience as a PR Head at Internexus, Contributing Writer for Medium, Writer for The New Student, Technical Content Writer for a University Internship, Marketing Strategy Coordinator for Global Podium, and UI/UX Designer for Rang Manch."
    },
    {
      keywords: ['projects', 'work examples', 'portfolio'],
      answer: "Abhinav has worked on WordPress Portfolio Sites and collaborative web projects. He also has UI/UX design project experience. You can check the 'Projects' section for more details!"
    },
    {
      keywords: ['about abhinav', 'who is abhinav', 'tell me about him'],
      answer: "Abhinav is an engineering student at Jaypee University of Information Technology with a passion for web development, UI/UX design, and digital content. He's also active in MUNs, article writing, and public speaking."
    },
    {
      keywords: ['education', 'study'],
      answer: "Abhinav is pursuing a Bachelors of Technology at Jaypee University of Information Technology and completed his CICSE/ICSE from City Montessori School with 90.4%."
    },
    {
      keywords: ['certifications', 'certified'],
      answer: "Abhinav is certified in AI Tools Workshop (Be10x), WordPress Development (Udemy), and React Development (Udemy)."
    },
    {
      keywords: ['contact', 'email', 'phone', 'whatsapp'],
      answer: "You can contact Abhinav via WhatsApp at +91 9415421672 or email at abhinavbajpayee88@gmail.com. Check the 'Contact' section for more details."
    },
    {
      keywords: ['mun', 'model united nations', 'extracurriculars'],
      answer: "Abhinav is very active in MUNs, having won 7 Best Delegate Awards and 30 Chairing experiences. He was also President of IIT Roorkee Model United Nations and an IIMUN Speaker."
    },
    {
      keywords: ['thank', 'thanks'],
      answer: "You're welcome! Is there anything else you'd like to know?"
    },
    {
      keywords: ['bye', 'goodbye', 'see you'],
      answer: "Goodbye! Feel free to reach out anytime."
    }
  ];

  const initialMessage = {
    sender: 'bot',
    text: "Hi there! I'm a chatbot designed to help you explore Abhinav's portfolio. You can ask me about his 'skills', 'experience', 'projects', or anything else related to his work. Type 'help' if you're unsure what to ask!"
  };

  useEffect(() => {
    // Add initial bot message on component mount
    setMessages([initialMessage]);
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    // Scroll to bottom whenever messages update
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    processUserInput(input.trim().toLowerCase());
    setInput('');
  };

  const processUserInput = (userInput) => {
    let botResponse = { sender: 'bot', text: "I'm not sure how to answer that. Try asking about 'skills', 'experience', 'projects', or type 'help' for suggestions." };

    if (userInput === 'help') {
      botResponse.text = "You can ask me about Abhinav's 'skills', 'experience', 'projects', 'education', 'certifications', 'contact' information, or his 'extracurriculars'. Try typing one of these keywords!";
    } else {
      for (const qa of qaPairs) {
        const matched = qa.keywords.some(keyword => userInput.includes(keyword));
        if (matched) {
          botResponse.text = qa.answer;
          break;
        }
      }
    }

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500); // Simulate bot typing delay
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Scroll target */}
      </div>
      <form onSubmit={handleSendMessage} className={styles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className={styles.inputField}
        />
        <button type="submit" className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

export default Chatbot;