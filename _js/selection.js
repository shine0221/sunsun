const catConditions = {
  0: [true, false, false, true, false, false, false, true],//白白
  1: [false, true, false, true, true, true, false, true],//小黑
  2: [false, true, false, true, false, true, false, true],//泰國
  3: [true, false, false, true, false, true, false, true],//大橘貓
  4: [false, true, false, true, false, true, false, true],//愛吃鬼
  5: [false, true, true, false, true, true, true, false],//咪喵?
  6: [false, true, false, true, false, true, false, true],//小美
  7: [false, true, false, true, false, true, false, true],//小金
  8: [true, true, false, true, true, true, false, true],//加菲貓
  9: [true, false, false, true, false, true, false, true],//大嗓門
  10: [false, true, false, true, true, true, false, true],//長尾三花
  11: [false, true, false, true, false, false, false, false],//美短媽媽?
  12: [true, false, false, true, true, true, false, true],//燒餅
  13: [true, false, false, true, true, true, false, true],//油條
  14: [false, true, false, true, true, false, true, false],//迷你虎
  15: [true, false, false, true, false, true, false, true],//大叔
  16: [true, false, false, true, true, true, false, true],//小豹貓
  17: [false, true, false, true, false, true, true, false],//康茉莉
  18: [false, true, false, true, false, true, false, true],//夏小花
};

const conditionNow = [false, false, false, false, false, false, false, false];

const selections = document.querySelectorAll(".selection");
selections.forEach((selection, index) => {
  selection.addEventListener("click", () => detect(index));
});

const cats = document.querySelectorAll(".cat_1");

function detect(index) {
  conditionNow[index] = !conditionNow[index];

  for (let catIndex in catConditions) {
    let matchAllCondition = true;
    const catNow = catConditions[catIndex];
    for (let i = 0; i < conditionNow.length; i++) {
      if (conditionNow[i] && !catNow[i]) {
        matchAllCondition = false;
        break;
      }
    }

    cats[catIndex].setAttribute(
      "style",
      `display:${matchAllCondition ? "show" : "none"}`
    );
  }
}
