function getInputValue(elementId: string): string {
    let inputELement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    return inputELement.value;
}

let logger = (message: string) => {
    console.log(message);
}

export { getInputValue as getValue, logger };