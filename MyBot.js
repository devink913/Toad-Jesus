using Discord;
using Discord.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Toad_Jesus
{
    class MyBot
    {
        DiscordClient discord;
        public MyBot()
        {
            discord = new DiscordClient(x =>
            {
                x.LogLevel = LogSeverity.Info;
                x.LogHandler = Log;
            });
            discord.UsingCommands(x =>
            {
                x.PrefixChar = '/';
                x.AllowMentionPrefix = true;
            });
            var commands = discord.GetService<CommandService>();
            commands.CreateCommand("sins")
                .Parameter("What would you like to confess young toad?", ParameterType.Unparsed)
                .Do(async (e) =>
                {
                    Random rnd = new Random();
                    int choice = rnd.Next(0, 10);
                    await (e.Channel.SendMessage(getResponse(e.User.Name, choice)));
                });
            commands.CreateCommand("verse")
               .Do(async (e) =>
               {
                   Random rnd = new Random();
                   int choice1 = rnd.Next(0, 8);
                   await (e.Channel.SendMessage(getResponse1(e.User.Name, choice1)));
               });
            discord.ExecuteAndWait(async () =>
            {
                await discord.Connect("MzgzMDcxODU1NTg3NjIyOTEy.DPfN2Q.Gmv3bsDBqx4bQdDpIyieWHo_Q88", TokenType.Bot);
            });
        }
        private void Log(object sender, LogMessageEventArgs e)
        {
            Console.WriteLine(e.Message);
        }
        private string getResponse(string username, int randomNumber)
        {
            switch (randomNumber)
            {
                case 0:
                    return "I forgive you, " + username;
                case 1:
                    return "I forgive you, " + username;
                case 2:
                    return "I forgive you, " + username;
                case 3:
                    return "I forgive you, " + username;
                case 4:
                    return "You have failed me my young toad, " + username;
                case 5:
                    return "You have failed me my young toad, " + username;
                case 6:
                    return "You have failed me my young toad, " + username;
                case 7:
                    return "You have failed me my young toad, " + username;
                case 8:
                    return "I don't know m8";
                case 9:
                    return "I don't know m8";
                default:
                    return "bot machine broke";
            }
        }
            private string getResponse1(string username, int randomNumber)
            {
                switch (randomNumber)
                {
                    case 0:
                        return "Toad is a common name for certain frogs, especially of the family Bufonidae, that are characterized by dry, leathery skin, short legs, and large bumps covering the parotoid glands.";
                    case 1:
                        return "A distinction between frogs and toads is not made in scientific taxonomy, but is common in popular culture (folk taxonomy), in which toads are associated with drier skin and more terrestrial habitats.";
                    case 2:
                        return "In scientific taxonomy, toads are found in the families Bufonidae, Bombinatoridae, Discoglossidae, Pelobatidae, Rhinophrynidae, Scaphiopodidae and Microhylidae.";
                    case 3:
                        return "Usually the largest of the bumps on the skin of a toad are those that cover the parotoid glands. The bumps are commonly called warts, but they have nothing to do with pathologic warts, being fixed in size, present on healthy specimens and not caused by infection.";
                    case 4:
                        return "Frogs travel from non-breeding to breeding areas of ponds and lakes. Bogert (1947) suggests that the toads' call is the most important cue in the homing to ponds. Toads, like many amphibians, exhibit breeding site fidelity (philopatry).";
                    case 5:
                    return "Individual American toads return to their natal ponds to breed where they are likely to encounter siblings as potential mates. Although inbred examples within a species is possible, siblings rarely mate. Toads recognize and avoid mating with close kin. Advertisement vocalizations given by males appear to serve as cues by which females recognize kin. Kin recognition thus allows avoidance of inbreeding and consequent inbreeding depression.";
                    case 6:
                        return "In Kenneth Grahame's 1908 novel The Wind in the Willows, Mr. Toad is a likeable and popular, if selfish and narcissistic, comic character. Mr. Toad reappears as the lead character in A. A. Milne's 1929 play Toad of Toad Hall, based on the book.";
                    case 7:
                        return "In Chinese culture, the Money Toad (or Frog) Jin Chan appears as a Feng Shui charm for prosperity.";
                    default:
                        return "bot machine broke";
                }
            }
        
    }
}
