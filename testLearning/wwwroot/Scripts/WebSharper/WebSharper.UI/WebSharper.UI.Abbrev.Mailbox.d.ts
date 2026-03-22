import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
export function StartProcessor(procAsync:((a:AsyncBody<void>) => void)):(() => void)
