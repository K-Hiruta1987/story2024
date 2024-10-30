const initialChoices = [
   { text: "予算確保の壁", next: "budget" },
   { text: "合意形成の壁", next: "agreement" },
   { text: "人材育成の壁", next: "training" },
   { text: "文化の違いの壁", next: "culture" },
   { text: "実行主体の不明確さの壁", next: "leadership" }
];

const scenarios = {
   budget: [
       { question: "「予算がない！」と自治体から言われた。。。初回予算案の提示は？", options: [
           { text: "説得力ある案を提案", result: "ベスト", story: "提案に詳細なデータや将来の経済効果を含め、予算案が承認される。市議会の支持を得てプロジェクトがスムーズに進行。" },
           { text: "代替案を提案", result: "ノーマル", story: "予算の一部がカットされ、プロジェクトは縮小して進むが、目標を達成。" },
           { text: "そのまま押し通す", result: "ワースト", story: "説得力が欠け、予算案が否決。プロジェクトは一時停止し、信頼関係が悪化。" }
       ] }
   ],
   agreement: [
       { question: "「いよいよはじめての打ち合わせ…！課長はTHE公務員っぽいぞ…」初回の会議での対話はどうする？", options: [
           { text: "丁寧に意見交換する", result: "ノーマル", story: "調整に時間がかかるが、最終的に合意が成立。計画は少し遅延するも、進行は可能。" },
           { text: "相手を否定する", result: "ワースト", story: "意見の対立が続き、合意に至らずプロジェクトが中断。信頼関係が失われ、今後の協力も困難に。" },
           { text: "ファシリテーターを招く", result: "ベスト", story: "お互いの立場を理解し合い、早期に合意形成が行われる。共通目標が明確化され、プロジェクトは順調にスタート。" }
       ] }
   ],
   training: [
       { question: "人材育成計画の策定はどうする？", options: [
           { text: "十分な研修を行う", result: "ベスト", story: "十分な研修が行われ、必要なスキルを持つ人材が揃う。プロジェクトの進行がスムーズで、成果も最大化。" },
           { text: "短期研修を実施", result: "ノーマル", story: "一部の人材がスキル不足だが、他のメンバーがカバーしてプロジェクトが完了する。" },
           { text: "研修を省略する", result: "ワースト", story: "研修不足で人材のスキルが追いつかず、プロジェクトが遅延し、成果が得られない。" }
       ] }
   ],
   culture: [
       { question: "「公務員はなんにもわかってくれない！」と部下からクレームチームビルディングの方法は？", options: [
           { text: "チームワークを重視", result: "ベスト", story: "両者の文化を理解し合うワークショップを開催。互いの強みを活かし、協力体制が構築される。" },
           { text: "意見のすり合わせ", result: "ノーマル", story: "一部の文化衝突はあるが、妥協と理解が進み、プロジェクトが完了する。" },
           { text: "自己中心的な行動", result: "ワースト", story: "文化の違いが大きな障害となり、互いの信頼が崩れ、プロジェクトが中止。" }
       ] }
   ],
   leadership: [
       { question: "リーダー選定はどうする？", options: [
           { text: "リーダーを決定", result: "ベスト", story: "適切なリーダーが選ばれ、計画的な実行が可能に。プロジェクトは成功し、全関係者が満足。" },
           { text: "議論を続ける", result: "ノーマル", story: "リーダーの決定に時間がかかるが、プロジェクトは最終的に完了。" },
           { text: "リーダー不在のまま進行", result: "ワースト", story: "リーダー不在のままプロジェクトが混乱し、中止に追い込まれる。" }
       ] }
   ]
};

let currentScenario = null;

function showInitialChoices() {
   const container = document.getElementById("question-container");
   const optionsContainer = document.getElementById("options-container");
   
   container.textContent = "次の事象から選んでください：";
   optionsContainer.innerHTML = '';
   
   initialChoices.forEach(choice => {
       const button = document.createElement("button");
       button.textContent = choice.text;
       button.onclick = () => {
           currentScenario = choice.next;
           showScenario();
       };
       optionsContainer.appendChild(button);
   });
}

function showScenario() {
   const scenario = scenarios[currentScenario][0];
   const container = document.getElementById("question-container");
   const optionsContainer = document.getElementById("options-container");
   
   container.textContent = scenario.question;
   optionsContainer.innerHTML = '';
   
   scenario.options.forEach(option => {
       const button = document.createElement("button");
       button.textContent = option.text;
       button.onclick = () => {
           showResult(option.result, option.story);
       };
       optionsContainer.appendChild(button);
   });
}

function showResult(result, story) {
   const container = document.getElementById("result-container");
   const questionContainer = document.getElementById("question-container");
   const optionsContainer = document.getElementById("options-container");

   questionContainer.style.display = 'none';
   optionsContainer.style.display = 'none';
   container.style.display = 'block';
   
   container.innerHTML = `<h2>診断結果: ${result}</h2><p>${story}</p>`;
}

document.addEventListener("DOMContentLoaded", showInitialChoices);
