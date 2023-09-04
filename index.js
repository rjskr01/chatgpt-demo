import OpenAI from "openai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
// });

// console.log(chatCompletion.choices);

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

rl.on("line", async(input) => {
    const obj = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "gpt-3.5-turbo",
    });

    console.log(obj.choices[0].message);
    rl.prompt();
});