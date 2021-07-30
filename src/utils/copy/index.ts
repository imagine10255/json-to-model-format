/**
 * 處理複製事件
 */
export const handleCopy = (
    setVisible: (isVisible: boolean) => void,
    text: string,
) => {
    setTimeout(() => {
        setVisible(false);
    }, 3000);

    setVisible(true);

    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
};
