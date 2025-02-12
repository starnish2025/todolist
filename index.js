// 할 일 목록 배열
let todos = [];

// 할 일 목록 출력 함수
function showTodos() {
  alert("\n📌 현재 TODO 목록:");
  //빈 배열일 때
  if (todos.length === 0) {
    alert("👉 할 일이 없습니다.");
  }
  // 배열에 요소가 있을 때
   else {
    for (let i = 0; i < todos.length; i++) {
      alert(`📌 현재 TODO 목록:\n${i + 1}. ${todos[i]}`);
    }
  }
}

// 할 일 삭제 함수
function removeTodo(index) {
  if (index >= 1 && index <= todos.length) {
    // splice 는 인수로 2개의 값을 받는다.
    // 첫번째 값: 시작할 인덱스
    // 두번째 값: 지우고 싶은 요소의 갯수
    let removed = todos.splice(index - 1, 1);
    // 지워진 값은 배열로 반환된다. 
    alert(`"${removed[0]}" 삭제됨!`);
  } else {
    alert("❌ 올바른 번호를 입력하세요.");
  }
}

// 사용자 입력 받기
while (true) {
  let command = prompt(
    "원하는 작업을 입력하세요 (추가: 'add', 삭제: 'remove', 목록 보기: 'list', 종료: 'exit')"
  );

  if (command === "add") {
    let newTodo = prompt("추가할 할 일을 입력하세요:");
    if (newTodo) {
      todos.push(newTodo);
      alert(`"${newTodo}" 추가됨!`);
    }
  } else if (command === "list") {
    showTodos();
  } else if (command === "remove") {
    let index = prompt("삭제할 할 일 번호를 입력하세요:");
    removeTodo(parseInt(index)); // 숫자로 변환 후 삭제
  } else if (command === "exit") {
    alert("🛑 프로그램 종료!");
    break;
  } else {
    alert("❌ 올바른 명령어를 입력하세요 (add, remove, list, exit)");
  }
}
