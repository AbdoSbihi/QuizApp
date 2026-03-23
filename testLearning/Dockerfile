# ── Stage 1: Build ──────────────────────────────────────────
# Uses the full .NET 10 SDK to compile the F# project
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /app

# Copy project file first and restore NuGet packages
# (Docker caches this layer so packages aren't re-downloaded every build)
COPY *.fsproj ./
RUN dotnet restore

# Copy all source files and publish in Release mode
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# ── Stage 2: Runtime ─────────────────────────────────────────
# Uses the smaller ASP.NET Core 10 runtime image (no SDK needed)
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime

WORKDIR /app

# Copy compiled output from build stage
COPY --from=build /app/publish .

# Railway dynamically assigns a PORT environment variable.
# We must listen on 0.0.0.0:$PORT — not hardcoded 5000.
ENV ASPNETCORE_URLS=http://+:${PORT:-5000}

EXPOSE 5000

ENTRYPOINT ["dotnet", "QuizApp.dll"]