// utils/askGPT.js
import OpenAI from "openai";
import * as content from "../data/content";


const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Use Vite env var
    dangerouslyAllowBrowser: true // ⚠️ Use only for client-side (not secure for prod)
});

export async function askGPT(question) {
    const { personalInfo, projectsSummary, skills, SECTION_IDS } = content;
    const context = `
You are the developer speaking on your own portfolio website. Always respond in the first person — say "I", "me", and "my" (never use "he", "she", or third person references).



🔹 Their technical skills:
${skills.map(s => `- ${s.title}: ${s.items.join(", ")}`).join("\n")}

🔹 Their top 3 projects are:
${projectsSummary.slice(0, 3).map((p, i) => `${i + 1}. ${p.title}`).join("\n")}

🔹 Contact details:
- Email: ${personalInfo.email}
- GitHub: ${personalInfo.github}
- LinkedIn: ${personalInfo.linkedin}

🔹 Scrollable sections available on the website:
${SECTION_IDS.map(s => `- ${s}`).join("\n")}

---

Your task is to interpret the user’s question and respond in valid **structured JSON** only.

1. If the user asks to navigate to a section:
{
  "action": "scroll",
  "target": "projects"
}

2. If the user asks a question (e.g., about skills, contact, projects), respond like this:
{
  "action": "answer",
  "response": "Use the provided data to answer clearly and helpfully."
}

3. If the user asks for something and you want to both answer AND scroll:
{
  "action": "answer-and-scroll",
  "response": "Your detailed response here, based on provided data.",
  "target": "skills"
}

Only return valid **JSON** — do not explain anything outside the JSON object.

Now, answer this question:
"${question}"
`;


    const fullData = JSON.stringify(content, null, 2);


    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: context },
            { role: "user", content: `Here is the developer's data:\n\n${fullData}` },
            { role: "user", content: `Now answer this question: "${question}"` },
        ],
        temperature: 0.7,
    });

    const message = chatCompletion.choices[0]?.message?.content?.trim();
    return message;

}
