const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
    help: "Supported commands: <span class=\"code\">about</span>, <span class=\"code\">experience</span>, <span class=\"code\">education</span>, <span class=\"code\">skills</span>, <span class=\"code\">corgi</span>",
    about: "Hello 👋<br>As the domain suggests, my name is Joey. I’m a full-stack developer currently living in Orlando, FL as I attend the University of Central Florida. My passion for what has me in this field is the limitless potential to positively impact other people’s lives with what I create. Building something and then having people use my creation is the coolest thing ever to me. Outside of coding, you can definitely find me looking at dog *corgi* pictures :)",
    skills: "<span class=\"code\">Languages:</span> JavaScript, TypeScript, PHP, Java, Python, C<br><span class=\"code\">Technologies:</span> Node.js, Git, Linux, NGINX, Apache, MySQL<br><span class=\"code\">Frameworks:</span> Angular, React.js, Vue.js, Laravel, Flask, Bootstrap, Selenium",
    education: "University of Central Florida<br>B.S. Information Technology — Emphasis in Software Engineering",
    resume: "<a href='./joey_colon_resume.pdf' class='success link'>resume.pdf</a>",
    experience: "LSQ Funding Group (Jan. 2019 - April 2019) (Orlando, FL)<br>Software Engineer Intern",
    corgi: "My top 3 favorite corgis:<br><a href='https://www.instagram.com/bearorcorgi/' class='success link'>Bear</a>, <a href='https://www.instagram.com/lychee_the_corgi/' class='success link'>Mochee</a>, <a href='https://www.instagram.com/thecorgijack/' class='success link'>Jack</a>"
};
let userInput, terminalOutput;

const app = () => {
    userInput = document.getElementById('userInput');
    terminalOutput = document.getElementById('terminalOutput');
    document.getElementById('dummyKeyboard').focus();
    console.log('Application loaded');
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log('Oops! no such command');
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

const key = function keyEvent(e) {
    const input = userInput.innerHTML;

    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = '';
        return;
    }

    userInput.innerHTML = input + e.key;
}

const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
}

document.addEventListener('keydown', backspace);
document.addEventListener('keypress', key);
document.addEventListener('DOMContentLoaded', app);
