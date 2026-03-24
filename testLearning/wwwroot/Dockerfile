FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src


COPY testLearning.fsproj ./testLearning.fsproj
RUN dotnet restore testLearning.fsproj


COPY . .
RUN dotnet publish testLearning.fsproj -c Release -o /app/publish


FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime

WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:${PORT:-5000}
EXPOSE 5000

ENTRYPOINT ["dotnet", "testLearning.dll"]