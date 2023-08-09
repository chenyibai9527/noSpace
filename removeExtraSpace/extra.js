// 多语言支持
const languages = {
    en: {
      title: "Remove Extra Spaces",
      inputCharacterCountLabel: "Input Characters",
      outputCharacterCountLabel: "Output Characters",
      removeSpacesButton: "Remove Extra Spaces",
      copyButton: "Copy",
      placeholder:"Input something...",
      toIndex:"Home",
      toTools:"Tools",
    },
    zh: {
      title: "删除多余空格",
      inputCharacterCountLabel: "输入字符数",
      outputCharacterCountLabel: "输出字符数",
      removeSpacesButton: "去除空格",
      copyButton: "复制",
      placeholder:"输入内容...",
      toIndex:"首页",
      toTools:"工具",
    },
    ja: {
      title: "スペースの削除",
      inputCharacterCountLabel: "入力文字数",
      outputCharacterCountLabel: "出力文字数",
      removeSpacesButton: "スペース除去",
      copyButton: "コピー",
      placeholder:"入力...",
      toIndex:"ホームページ",
      toTools:"ツール",
    },
    ko: {
        title: "공백 제거 도구",
        inputCharacterCountLabel: "입력 문자 수",
        outputCharacterCountLabel: "출력 문자 수",
        removeSpacesButton: "공백 제거",
        copyButton: "복사",
        placeholder: "텍스트를 입력하세요...",
        toIndex:"홈",
        toTools:"도구",
    },
    nl: {
        title: "Verwijder overtollige spaties",
        inputCharacterCountLabel: "Invoertekens",
        outputCharacterCountLabel: "Uitvoertekens",
        removeSpacesButton: "Verwijder spaties",
        copyButton: "Kopiëren",
        placeholder: "Voer iets in...",
        toIndex:"Startpagina",
        toTools:"Gereedschap",
    },
    de: {
        title: "Leerzeichen entfernen",
        inputCharacterCountLabel: "Eingabezeichen",
        outputCharacterCountLabel: "Ausgabezeichen",
        removeSpacesButton: "Leerzeichen entfernen",
        copyButton: "Kopieren",
        placeholder: "Etwas eingeben...",
        toIndex:"Startseite",
        toTools:"Werkzeuge",
    },
    fr: {
        title: "Supprimer les espaces superflus",
        inputCharacterCountLabel: "Caractères saisis",
        outputCharacterCountLabel: "Caractères en sortie",
        removeSpacesButton: "Supprimer les espaces",
        copyButton: "Copier",
        placeholder: "Saisissez quelque chose...",
        toIndex:"Page d'accueil",
        toTools:"Outils",
    },
    zh_FT: {
        title: "刪除多餘空格",
        inputCharacterCountLabel: "輸入字元",
        outputCharacterCountLabel: "輸出字元",
        removeSpacesButton: "移除空格",
        copyButton: "複製",
        placeholder: "輸入內容...",
        toIndex:"首頁",
        toTools:"工具",
    },
    ru: {
        title: "Удалить лишние пробелы",
        inputCharacterCountLabel: "Количество символов ввода",
        outputCharacterCountLabel: "Количество символов вывода",
        removeSpacesButton: "Удалить пробелы",
        copyButton: "Копировать",
        placeholder: "Введите что-нибудь...",
        toIndex:"Главная страница",
        toTools:"Инструменты",
    },
    it: {
        title: "Rimuovere gli spazi inutili",
        inputCharacterCountLabel: "Caratteri di input",
        outputCharacterCountLabel: "Caratteri di output",
        removeSpacesButton: "Rimuovi spazi",
        copyButton: "Copia",
        placeholder: "Inserisci qualcosa...",
        toIndex:"Pagina iniziale",
        toTools:"Strumenti",
    },
    es: {
        title: "Eliminar espacios en blanco innecesarios",
        inputCharacterCountLabel: "Caracteres de entrada",
        outputCharacterCountLabel: "Caracteres de salida",
        removeSpacesButton: "Eliminar espacios",
        copyButton: "Copiar",
        placeholder: "Ingrese algo...",
        toIndex:"Página de inicio",
        toTools:"Herramientas",
    },
  };
  
  function setLanguage(language) {
    const languageData = languages[language];
  
    // 设置标题和按钮文本
    document.getElementById("title").textContent = languageData.title;
    document.getElementById("inputCharacterCountLabel").textContent = languageData.inputCharacterCountLabel;
    document.getElementById("outputCharacterCountLabel").textContent = languageData.outputCharacterCountLabel;
    document.getElementById("removeSpacesButton").textContent = languageData.removeSpacesButton;
    document.getElementById("copyButton").textContent = languageData.copyButton;
    document.getElementById("toIndex").textContent = languageData.toIndex;
    document.getElementById("toTools").textContent = languageData.toTools;
    const inputTextElement = document.getElementById("inputText");
    inputTextElement.placeholder = languageData.placeholder;
  }
  
  function changeLanguage(language) {
    setLanguage(language);
  }
  
  // 页面加载完成时初始化默认语言
  window.addEventListener("DOMContentLoaded", function () {
    setLanguage("en");
  });
  
  // 去除空格逻辑
  function countCharacters(element, countElementId) {
    const countElement = document.getElementById(countElementId);
    countElement.textContent = element.value.length;
  }
  
  function removeSpaces() {
    const inputText = document.getElementById("inputText").value;
    const outputText = inputText.replace(/\s/g, "");
    document.getElementById("outputText").value = outputText;
    countCharacters(document.getElementById("outputText"), "outputCount");
  }
  
  function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  function removeExtraSpaces() {
    // 获取输入的文本
    var inputText = document.getElementById("inputText").value;

    // 删除多余空格
    var processedText = inputText.replace(/\s+/g, " ");

    // 显示处理后的文本
    document.getElementById("outputText").innerHTML = processedText;
}

window.addEventListener('resize', function() {
    // 获取浏览器窗口宽度
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // 设置限制宽度
    var maxWidth = 640; // 设置你想限制的宽度

    // 如果窗口宽度小于限制宽度，禁用用户调整窗口大小
    if (windowWidth < maxWidth) {
        window.resizeTo(maxWidth, window.innerHeight);
    }
});