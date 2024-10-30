const questions = [
    {
        question: "「予算が削られました」と初回の会議で自治体から言われた…対話はどうする？",
        options: [
            { text: "「予算内でがんばります…」丁寧に意見交換する", next: 1, result: "ノーマル" },
            { text: "「（゜Д゜）ハァ？」相手を否定する", next: 2, result: "ワースト" },
            { text: "ファシリテーターを招く", next: 3, result: "ベスト" },
        ]
    },
    {
        question: "「いよいよプロジェクトを始動！」しかし、市民の反応が悪かった……どう対応する？",
        options: [
            { text: "あらためて、市民説明会を開催", next: 4, result: "ベスト" },
            { text: "内部調整を優先", next: 5, result: "ノーマル" },
            { text: "無視して進行", next: 6, result: "ワースト" },
        ]
    },
    {
        question: "「もうちょっとこれやってくれませんか？」と仕様書にないことを求められた場合の対応は？",
        options: [
            { text: "負担軽減方法を模索", next: null, result: "ベスト" },
            { text: "企業が負担", next: null, result: "ノーマル" },
            { text: "「（゜Д゜）ハァ？」譲らずに合意しない", next: null, result: "ワースト" },
        ]
    }
];

let currentQuestion = 0;

function showQuestion() {
    const container = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result-container");
    
    const question = questions[currentQuestion];
    container.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => {
            if (option.next !== null) {
                currentQuestion = option.next;
                showQuestion();
            } else {
                showResult(option.result);
            }
        };
        optionsContainer.appendChild(button);
    });
}

function showResult(result) {
    const container = document.getElementById("result-container");
    container.style.display = 'block';
    container.textContent = `診断結果: ${result}`;
}

document.addEventListener("DOMContentLoaded", showQuestion);
