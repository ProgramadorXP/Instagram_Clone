import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import MoreOptionsIcon from "./icons/MoreOptionsIcon";
import NotificationIcon from "./icons/NotificationIcon";
import CommentIcon from "./icons/CommentIcon";
import ShareIcon from "./icons/ShareIcon";
import SaveIcon from "./icons/SaveIcon";

export default function Post() {
  return (
    <Card className="shadow-none w-full rounded-none border-none py-2 gap-2 max-w-[470px]">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=5" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm">username</span>
        </div>
        <MoreOptionsIcon />
      </CardHeader>

      {/* Image */}
      <CardContent className="p-0">
        <AspectRatio ratio={1 / 1}>
          <img
            src="https://picsum.photos/500/500"
            alt="post"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </CardContent>

      {/* Actions */}
      <CardFooter className="flex justify-between px-4 py-1">
        <div className="flex gap-4">
          <NotificationIcon />
          <CommentIcon />
          <ShareIcon />
        </div>
        <SaveIcon />
      </CardFooter>

      {/* Likes & description */}
      <div className="px-4 pb-3 text-sm">
        <p className="font-semibold">100 likes</p>
        <p>
          <span className="font-semibold">username</span> Beautiful view 🌅
        </p>
        <p className="text-gray-500 text-xs cursor-pointer">
          View all 20 comments
        </p>
      </div>
    </Card>
  );
}
