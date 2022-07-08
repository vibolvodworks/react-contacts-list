export const getDataObjectFromStorage = () => {
    let inputObjectString = localStorage.getItem("contactsInfo");
    if (inputObjectString == null) {
        inputObjectString = "[]";
    }

    return JSON.parse(inputObjectString);
};

export const updateLocalStorage = (contactObject) => {
    localStorage.setItem("contactsInfo", JSON.stringify(contactObject));
}