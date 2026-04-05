function reverseString(s: string[]): void {
    let length = s.length - 1;
    let inverse: string[] = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        inverse[length] = s[i];
        length--;
    }

    for (let i = 0; i < s.length; i++) {
        s[i] = inverse[i];
    }
}