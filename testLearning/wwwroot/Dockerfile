# ── Stage 1: Build ──────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

# Copy and restore — name the .fsproj explicitly so dotnet finds it
COPY testLearning.fsproj ./testLearning.fsproj
RUN dotnet restore testLearning.fsproj

# Copy everything and publish
COPY . .
RUN dotnet publish testLearning.fsproj -c Release -o /app/publish

# ── Stage 2: Runtime ─────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:${PORT:-5000}
EXPOSE 5000

ENTRYPOINT ["dotnet", "testLearning.dll"]