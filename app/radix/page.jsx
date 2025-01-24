import { Flex, Text, Button } from "@radix-ui/themes";
import DropdownMenuDemo from "@/app/ui/Dropdown";

export default function MyApp() {
    return (
        <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Let's go</Button>
            <DropdownMenuDemo></DropdownMenuDemo>
        </Flex>
    );
}
