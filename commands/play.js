exports.run = (client, message, args) => {
  const role = message.guild.roles.find("name", "Game");
  message.member.addRole(role.id).catch(console.error);
}
