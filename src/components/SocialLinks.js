import { RiDiscordLine, RiTwitterFill } from 'react-icons/ri';
import { Icon, Link } from "@chakra-ui/react"

function Socials() {
  return (
    <div className="socials">
      <Link href="https://twitter.com/MillionAdaHP"
        target="_blank"
        _hover={{ textColor: "teal.600" }}
        _focus={{ boxShadow: "outline" }}>
        <Icon as={RiTwitterFill} mr={2}/>
      </Link>
      <Link href="https://discord.gg/mqC96Wnf"
        target="_blank"
        _hover={{ textColor: "teal.600" }}
        _focus={{ boxShadow: "outline" }}>
        <Icon as={RiDiscordLine} mr={2} />
      </Link>
    </div>
  )
}

export default Socials;
