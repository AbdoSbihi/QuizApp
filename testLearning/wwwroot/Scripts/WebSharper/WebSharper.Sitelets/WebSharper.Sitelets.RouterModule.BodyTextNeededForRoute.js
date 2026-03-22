export default class BodyTextNeededForRoute extends Error {
  constructor(){
    super("This router needs body text loaded synchronously. Wait for Http.Request.BodyText to finish then try again.");
  }
}
