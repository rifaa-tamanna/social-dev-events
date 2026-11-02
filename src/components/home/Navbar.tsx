// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverDescription,
//   PopoverHeader,
//   PopoverTitle,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// const navlinks = [
//   { href: "/events", label: "Events", active: false },
//   { href: "/create-events", label: "Create Event", active: false },
//   { href: "/manage-event", label: "Manage Event", active: false },
// ];

// const Navbar = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;
//   console.log("user", user);

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black border-b border-gray-800 px-4 md:px-8 py-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Left Side: Logo */}
//         <Link href={"/"}>
//           <Image
//             src="/soci-dev-logo.png"
//             width={120}
//             height={120}
//             alt="Development Logo"
//           />
//         </Link>

//         {/* Middle: Upcoming Events (Desktop) */}
//         <div className="hidden md:flex items-center gap-2 font-['Space_Grotesk'] text-[#D6CDBD]">
//           <svg
//             className="w-5 h-5 text-[#D6CDBD]"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//             />
//           </svg>
//           <Link href="/events">Upcoming Events</Link>
//         </div>

//         {/* Right Side: Login & Sign Up Buttons (Desktop) */}
//         <div className="hidden md:flex items-center gap-3">

          
          
//           <Popover>
//   <PopoverTrigger render={<Avatar>
//   <AvatarImage src={user?.image as string} />
//   <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
// </Avatar>}>
//     Open Popover
//   </PopoverTrigger>
//   <PopoverContent>
//     <PopoverHeader>
//       <PopoverTitle>{user?.name}</PopoverTitle>
//       <PopoverDescription>{user?.email}</PopoverDescription>
      
//     </PopoverHeader>
//     <hr />
//     <Button variant={'destructive'}>Sign Out</Button>
//   </PopoverContent>
// </Popover>

//           <Link
//             href="/signin"
//             className="font-['Space_Grotesk'] bg-black text-white border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition duration-200"
//           >
//             Sign In
//           </Link>

//           <Link
//             href="/signup"
//             className="font-['Space_Grotesk'] bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition duration-200 font-medium"
//           >
//             Sign up
//           </Link>
//         </div>

//         {/* Mobile Hamburger Menu Icon */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 mt-4 pt-4 border-t border-gray-800">
//           <div className="flex items-center gap-2 font-['Space_Grotesk'] text-[#D6CDBD]">
//             <svg
//               className="w-5 h-5 text-[#D6CDBD]"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>
//             <Link href="/events" className="hover:underline">
//               Upcoming Events
//             </Link>
//           </div>
//           <div className="flex flex-col w-full gap-2 px-4">
//             <Link
//               href="/login"
//               className="font-['Space_Grotesk'] text-center bg-black text-white border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
//             >
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               className="font-['Space_Grotesk'] text-center bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition font-medium"
//             >
//               Sign up
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  CalendarDays,
  PlusCircle,
  Settings,
  CheckCircle2,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] =
    useState(false);

  // Logout Function
  const handleSignOut = async () => {
    try {
      await authClient.signOut();

      router.push("/signin");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Profile Dropdown Menu
  const ProfileDropdown = () => {
    if (!user) return null;

    return (
      <Popover>
        <PopoverTrigger
          render={
            <button
              type="button"
              aria-label="Open profile menu"
              className="rounded-full focus:outline-none focus:ring-2 focus:ring-[#F08C2E]/50"
            >
              <Avatar className="h-11 w-11 border-2 border-[#8E54DF] hover:border-[#F08C2E] transition-all cursor-pointer">
                <AvatarImage
                  src={user.image || ""}
                  alt={user.name || "User"}
                />

                <AvatarFallback className="bg-[#2A2823] text-[#D6CDBD] font-semibold">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </button>
          }
        />

        <PopoverContent
          align="end"
          sideOffset={12}
          className="w-72 p-0 bg-[#0A0A0E]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-white overflow-hidden"
        >
          {/* User Information */}
          <PopoverHeader className="px-4 py-3 border-b border-white/10 space-y-1">
            <PopoverTitle className="text-sm font-semibold text-white font-['Space_Grotesk']">
              {user.name}
            </PopoverTitle>

            <PopoverDescription className="text-xs text-[#D6CDBD]/70 font-['Space_Grotesk']">
              {user.email}
            </PopoverDescription>
          </PopoverHeader>

          {/* Menu Items */}
          <div className="p-2 space-y-1">

            {/* Create Event */}
            <Link
              href="/create-event"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#D6CDBD] hover:bg-white/5 hover:text-white transition-all font-['Space_Grotesk']"
            >
              <PlusCircle className="h-5 w-5 text-[#F08C2E]" />

              Create Event
            </Link>

            {/* Manage Events */}
            <Link
              href="/manage-event"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#D6CDBD] hover:bg-white/5 hover:text-white transition-all font-['Space_Grotesk']"
            >
              <Settings className="h-5 w-5 text-[#8E54DF]" />

              Manage Events
            </Link>

            {/* Joined Events */}
            <Link
              href="/joined-event"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#D6CDBD] hover:bg-white/5 hover:text-white transition-all font-['Space_Grotesk']"
            >
              <CheckCircle2 className="h-5 w-5 text-[#F08C2E]" />

              Joined Events
            </Link>

          </div>

          {/* Logout */}
          <div className="border-t border-white/10 p-2">

            <button
              type="button"
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all font-['Space_Grotesk']"
            >
              <LogOut className="h-5 w-5" />

              Logout
            </button>

          </div>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <nav className="bg-black border-b border-gray-800 px-4 md:px-8 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left Side: Logo */}
        <Link href="/">
          <Image
            src="/soci-dev-logo.png"
            width={120}
            height={120}
            alt="Development Logo"
          />
        </Link>

        {/* Middle: Upcoming Events */}
        <div className="hidden md:flex items-center gap-2 font-['Space_Grotesk'] text-[#D6CDBD]">

          <CalendarDays className="w-5 h-5 text-[#D6CDBD]" />

          <Link
            href="/events"
            className="hover:text-[#F08C2E] transition"
          >
            Upcoming Events
          </Link>

        </div>

        {/* Right Side: Auth */}
        <div className="hidden md:flex items-center gap-3">

          {user ? (
            <ProfileDropdown />
          ) : (
            <>
              <Link
                href="/signin"
                className="font-['Space_Grotesk'] bg-black text-white border border-white/20 px-5 py-2 rounded-md hover:bg-white hover:text-black transition duration-200"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="font-['Space_Grotesk'] bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition duration-200 font-medium"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-gray-800">

          {/* Upcoming Events */}
          <Link
            href="/events"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 font-['Space_Grotesk'] text-[#D6CDBD] hover:text-[#F08C2E] transition"
          >
            <CalendarDays className="w-5 h-5" />

            Upcoming Events
          </Link>

          {user ? (
            <div className="px-2">

              {/* Mobile User Profile */}
              <button
                type="button"
                onClick={() =>
                  setMobileProfileOpen(!mobileProfileOpen)
                }
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#2A2823]/70 border border-white/10"
              >
                <div className="flex items-center gap-3">

                  <Avatar className="h-10 w-10 border border-[#8E54DF]">
                    <AvatarImage
                      src={user.image || ""}
                      alt={user.name || "User"}
                    />

                    <AvatarFallback className="bg-[#2A2823] text-[#D6CDBD]">
                      {user.name?.charAt(0)?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-left">

                    <p className="text-sm font-semibold text-white">
                      {user.name}
                    </p>

                    <p className="text-xs text-[#D6CDBD]/70">
                      {user.email}
                    </p>

                  </div>

                </div>

                <Settings className="w-4 h-4 text-[#D6CDBD]" />

              </button>

              {/* Mobile Profile Links */}
              {mobileProfileOpen && (
                <div className="mt-2 space-y-1">

                  <Link
                    href="/create-event"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 text-sm text-[#D6CDBD] hover:bg-white/5 rounded-lg"
                  >
                    <PlusCircle className="w-5 h-5 text-[#F08C2E]" />

                    Create Event
                  </Link>

                  <Link
                    href="/manage-event"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 text-sm text-[#D6CDBD] hover:bg-white/5 rounded-lg"
                  >
                    <Settings className="w-5 h-5 text-[#8E54DF]" />

                    Manage Events
                  </Link>

                  <Link
                    href="/joined-event"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 text-sm text-[#D6CDBD] hover:bg-white/5 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F08C2E]" />

                    Joined Events
                  </Link>

                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-3 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-lg"
                  >
                    <LogOut className="w-5 h-5" />

                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <div className="flex flex-col w-full gap-2 px-4">

              <Link
                href="/signin"
                className="font-['Space_Grotesk'] text-center bg-black text-white border border-white/20 px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="font-['Space_Grotesk'] text-center bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition font-medium"
              >
                Sign Up
              </Link>

            </div>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;
