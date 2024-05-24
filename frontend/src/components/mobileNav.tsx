import { Separator } from "@radix-ui/react-separator";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";

const mobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span> Welcom to MernEats.com!</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default mobileNav;
