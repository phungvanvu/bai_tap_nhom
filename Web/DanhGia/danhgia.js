const quizData = [
    {
        question: "Câu 1: Khi gặp vấn đề phức tạp,bạn:",
        a: "A.Phân tích từng bước",
        b: "B.Tìm kiếm giải pháp sáng tạo",
        c: "C.Hỏi ý kiến người khác",
        d: "D.Thử nghiệm nhiều phương án",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
    {
        question: "Câu 2:Trong một dự án,vai trò của bạn thường là:",
        a: "A.Lên kế hoạch và tổ chức",
        b: "B.Viết mã và giải quyết vấn đề",
        c: "C.Đảm bảo chất lượng sản phẩm",
        d: "D.Hỗ trợ kỹ thuật cho người dùng",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
    {
        question: "Câu 3:Bạn thích làm việc với:",
        a: "A.Máy móc và thiết bị cứng",
        b: "B.Ứng dụng và phần mềm",
        c: "C.Dữ liệu và thông tin",
        d: "D.Môi trường mạng và hệ thống",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
    {
        question: "Câu 4:Bạn thích làm việc trong môi trường nào?",
        a: "A.Startup công nghệ",
        b: "B.Công ty phần mềm lớn",
        c: "C.Trung tâm nghiên cứu",
        d: "D.Công ty tư vấn IT",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
    {
        question: "Câu 5:Kỹ năng nào sau đây bạn tự tin nhất?",
        a: "A.Phân tích vấn đề",
        b: "B.Sáng tạo nội dung",
        c: "C.Quản lý dự án",
        d: "D.Kỹ thuật mạng",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
    {
        question: "Câu 6:Bạn muốn làm việc trong lĩnh vực nào?",
        a: "A.Phát triển ứng dụng di động",
        b: "B.Phát triển trò chơi điện tử",
        c: "C.Quản lý dữ liệu doanh nghiệp",
        d: "D.Tối ưu hóa hệ thống",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
    {
        question: "Câu 7:Trong quá trình làm việc, bạn thích:",
        a: "A.Làm việc nhóm",
        b: "B.Làm việc độc lập",
        c: "C.Tìm kiếm sự hỗ trợ",
        d: "D.Nghiên cứu và phát triển",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
    {
        question: "Câu 8:Công nghệ bạn quan tâm nhất là:",
        a: "A.Trí tuệ nhân tạo",
        b: "B.Phát triển web",
        c: "C.An ninh mạng",
        d: "D.Phân tích dữ liệu",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
    
    {
        question: "Câu 9:Công việc nào sau đây bạn thấy hấp dẫn nhất?",
        a: "A.Xây dựng cơ sở dữ liệu",
        b: "B.Thiết kế giao diện người dùng",
        c: "C.Quản lý hệ thống mạng",
        d: "D.Phân tích và xử lý dữ liệu",
        fieldA: 1, // Điểm cho lĩnh vực A
        fieldB: 1, // Điểm cho lĩnh vực B
        fieldC: 1, // Điểm cho lĩnh vực C
        fieldD: 1  // Điểm cho lĩnh vực D
    },
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let fieldScores = {
    fieldA: 0,
    fieldB: 0,
    fieldC: 0,
    fieldD: 0
};
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        const currentQuizData = quizData[currentQuiz];
        // Chỉ tăng điểm cho lĩnh vực tương ứng với câu trả lời được chọn
        if(answer === 'a') {
            fieldScores.fieldA += currentQuizData.fieldA;
        } else if(answer === 'b') {
            fieldScores.fieldB += currentQuizData.fieldB;
        } else if(answer === 'c') {
            fieldScores.fieldC += currentQuizData.fieldC;
        } else if(answer === 'd') {
            fieldScores.fieldD += currentQuizData.fieldD;
        }
        
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            let maxScore = Math.max(fieldScores.fieldA, fieldScores.fieldB, fieldScores.fieldC, fieldScores.fieldD);
            let results = [];
            if (fieldScores.fieldA === maxScore) results.push('Lập trình Web');
            if (fieldScores.fieldB === maxScore) results.push('Lập trình Mobile');
            if (fieldScores.fieldC === maxScore) results.push('Khoa học Dữ liệu');
            if (fieldScores.fieldD === maxScore) results.push('Trí tuệ nhân tạo');
            
            let resultText = `Bạn phù hợp với: ${results.join(', ')}.`;
            quiz.innerHTML = `<h2>${resultText}</h2><button onclick="location.reload()">Làm lại</button>`;
        }
    }
});
