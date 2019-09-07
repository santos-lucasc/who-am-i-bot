exports.run = (client, message, args) => {
  let role = message.guild.roles.find(t => t.name == 'Game')
  message.guild.members.forEach(member => {
    if(!member.roles.find(t => t.name == 'Game')) return;
    member.removeRole(role.id).catch(console.error);
  });
}
