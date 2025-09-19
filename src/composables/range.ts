export function range(start: number, end: number) : number[] {
    return Array.from({ length: end }, (_, i) => i + start);    // end は含まない
}
