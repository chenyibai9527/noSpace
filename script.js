// 多语言支持
const languages = {
    en: {
      title: "Remove Spaces",
      inputCharacterCountLabel: "Input Characters",
      outputCharacterCountLabel: "Output Characters",
      removeSpacesButton: "Remove Spaces",
      copyButton: "Copy",
      placeholder:"Input something...",
    },
    zh: {
      title: "去除空格",
      inputCharacterCountLabel: "输入字符数",
      outputCharacterCountLabel: "输出字符数",
      removeSpacesButton: "去除空格",
      copyButton: "复制",
      placeholder:"输入内容...",
    },
    ja: {
      title: "スペースの削除",
      inputCharacterCountLabel: "入力文字数",
      outputCharacterCountLabel: "出力文字数",
      removeSpacesButton: "スペース除去",
      copyButton: "コピー",
      placeholder:"入力...",
    },
    ko: {
        title: "공백 제거 도구",
        inputCharacterCountLabel: "입력 문자 수",
        outputCharacterCountLabel: "출력 문자 수",
        removeSpacesButton: "공백 제거",
        copyButton: "복사",
        placeholder: "텍스트를 입력하세요..."
    },
    nl: {
        title: "Verwijder spaties",
        inputCharacterCountLabel: "Invoertekens",
        outputCharacterCountLabel: "Uitvoertekens",
        removeSpacesButton: "Verwijder spaties",
        copyButton: "Kopiëren",
        placeholder: "Voer iets in...",
    },
    de: {
        title: "Leerzeichen entfernen",
        inputCharacterCountLabel: "Eingabezeichen",
        outputCharacterCountLabel: "Ausgabezeichen",
        removeSpacesButton: "Leerzeichen entfernen",
        copyButton: "Kopieren",
        placeholder: "Etwas eingeben...",
    },
    fr: {
        title: "Supprimer les espaces",
        inputCharacterCountLabel: "Caractères saisis",
        outputCharacterCountLabel: "Caractères en sortie",
        removeSpacesButton: "Supprimer les espaces",
        copyButton: "Copier",
        placeholder: "Saisissez quelque chose...",
    },
    zh_FT: {
        title: "移除空格",
        inputCharacterCountLabel: "輸入字元",
        outputCharacterCountLabel: "輸出字元",
        removeSpacesButton: "移除空格",
        copyButton: "複製",
        placeholder: "輸入內容...",
    },
    ru: {
        title: "Удалить пробелы",
        inputCharacterCountLabel: "Количество символов ввода",
        outputCharacterCountLabel: "Количество символов вывода",
        removeSpacesButton: "Удалить пробелы",
        copyButton: "Копировать",
        placeholder: "Введите что-нибудь...",
    },
    it: {
        title: "Rimuovi spazi",
        inputCharacterCountLabel: "Caratteri di input",
        outputCharacterCountLabel: "Caratteri di output",
        removeSpacesButton: "Rimuovi spazi",
        copyButton: "Copia",
        placeholder: "Inserisci qualcosa...",
    },
    es: {
        title: "Eliminar espacios",
        inputCharacterCountLabel: "Caracteres de entrada",
        outputCharacterCountLabel: "Caracteres de salida",
        removeSpacesButton: "Eliminar espacios",
        copyButton: "Copiar",
        placeholder: "Ingrese algo...",
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