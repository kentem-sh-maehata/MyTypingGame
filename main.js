"use strict";
{
    const word = document.getElementById("word");
    const words = ["pink", "blue", "red"];
    let idx = 0;
    let startTime = Date.now();
    word === null || word === void 0 ? void 0 : word.addEventListener("click", () => {
        if (word)
            word.textContent = words[idx];
    });
    let wordArray = words[idx].split("");
    let loc = 0;
    document.addEventListener("keydown", (e) => {
        console.log(e.key);
        console.log(wordArray[loc]);
        if (e.key === wordArray[loc]) {
            wordArray[loc] = "_";
            if (word)
                word.innerHTML = wordArray.join('');
            loc++;
            if (loc === wordArray.length) { //文字数の判定
                idx++;
                //単語数の判定
                if (idx === words.length) { //終了
                    const finishTime = new Date(Date.now() - startTime);
                    const finishMin = finishTime.getSeconds();
                    const finishMilli = finishTime.getMilliseconds();
                    const p = document.querySelector('p');
                    if (p)
                        p.textContent = `Finished! ${finishMin}.${finishMilli} seconds!`;
                }
                else {
                    if (word)
                        word.textContent = words[idx];
                    wordArray = words[idx].split("");
                    loc = 0;
                }
            }
        }
    });
}
