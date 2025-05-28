    document.getElementById("submitBtn").addEventListener("click", function () {
      let score = 0;
      let total = 5;
      let allAnswered = true;

      for (let i = 1; i <= total; i++) {
        const answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (!answer) {
          allAnswered = false;
          break;
        }
        if (answer.value === "1") {
          score++;
        }
      }

      if (!allAnswered) {
        document.getElementById("result").innerText = "გთხოვთ უპასუხეთ ყველა კითხვას.";
        document.getElementById("scoreBar").style.width = "0%";
        return;
      }

      let resultText = "";
      if (score === 5) {
        resultText = "შენ ნამდვილი რევოლუციის მცოდნე ხარ! 🔥";
      } else if (score >= 3) {
        resultText = "კარგი შედეგია! 💡 ცოტაც და სრულყოფილად გეცოდინება.";
      } else {
        resultText = "დაიწყე თავიდან — ჯერ კიდევ ბევრია სასწავლი! 📚";
      }

      document.getElementById("result").innerText = `შენი ქულა: ${score}/5\n${resultText}`;
      document.getElementById("scoreBar").style.width = `${(score / total) * 100}%`;
    });