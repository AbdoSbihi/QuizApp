module QuizApp.Startup

open System
open System.Diagnostics
open System.Runtime.InteropServices
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.AspNetCore.StaticFiles
open Microsoft.Extensions.DependencyInjection
open Microsoft.Extensions.Hosting
open WebSharper.AspNetCore

type Startup() =

    member _.ConfigureServices(services: IServiceCollection) =
        // CORRECT API (from official WebSharper docs):
        // services.AddSitelet(siteletValue) on IServiceCollection directly.
        // This is NOT deprecated — AddSitelet on IServiceCollection is the
        // correct way. Only AddSitelet on WebSharperOptions builder was wrong.
        services
            .AddSitelet(Site.Main)
            .AddWebSharper()
        |> ignore
        services.AddRouting() |> ignore

    member _.Configure(app: IApplicationBuilder, env: IWebHostEnvironment) =
        if env.IsDevelopment() then
            app.UseDeveloperExceptionPage() |> ignore

        // Serve wwwroot/Main.html as default page for "/"
        let defaultFiles = DefaultFilesOptions()
        defaultFiles.DefaultFileNames.Clear()
        defaultFiles.DefaultFileNames.Add("Main.html")
        app.UseDefaultFiles(defaultFiles) |> ignore

        // Serve static files from wwwroot/ (Main.html, QuizApp.min.js, QuizApp.css)
        app.UseStaticFiles() |> ignore

        // WebSharper handles RPC calls at /api/websharper/*
        app.UseWebSharper() |> ignore


let openBrowser (url: string) =
    try
        if RuntimeInformation.IsOSPlatform(OSPlatform.Windows) then
            Process.Start(ProcessStartInfo(url, UseShellExecute = true)) |> ignore
        elif RuntimeInformation.IsOSPlatform(OSPlatform.OSX) then
            Process.Start("open", url) |> ignore
        else
            Process.Start("xdg-open", url) |> ignore
    with ex ->
        printfn "Could not open browser: %s" ex.Message


[<EntryPoint>]
let main argv =
    let port = Environment.GetEnvironmentVariable("PORT")
    let url  =
        if port <> null then sprintf "http://0.0.0.0:%s" port
        else "http://localhost:5000"

    let host =
        Host.CreateDefaultBuilder(argv)
            .ConfigureWebHostDefaults(fun webBuilder ->
                webBuilder.UseStartup<Startup>() |> ignore
                webBuilder.UseUrls(url) |> ignore
            )
            .Build()

    host.Start()

    if port = null then
        Threading.Thread.Sleep(500)
        openBrowser url

    printfn "QuizApp running at %s — Ctrl+C to stop." url
    host.WaitForShutdown()
    0