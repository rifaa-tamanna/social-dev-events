// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import { authClient } from "@/lib/auth-client";

// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar";

// import {
//   Popover,
//   PopoverContent,
//   PopoverDescription,
//   PopoverHeader,
//   PopoverTitle,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import {
//   CalendarDays,
//   PlusCircle,
//   Settings,
//   CheckCircle2,
//   LogOut,
//   Menu,
//   X,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// const Navbar = () => {
//   const router = useRouter();

//   const { data: session } = authClient.useSession();

//   const user = session?.user;

//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   // Logout Function
//   const handleSignOut = async () => {
//     try {
//       await authClient.signOut();

//       setIsOpen(false);
//       setMobileProfileOpen(false);
//       setProfileOpen(false);

//       router.push("/signin");
//       router.refresh();
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   // Close all menus after navigation
//   const handleMenuClose = () => {
//     setProfileOpen(false);
//     setMobileProfileOpen(false);
//     setIsOpen(false);
//   };

//   // Profile Dropdown Menu
//   const ProfileDropdown = () => {
//     if (!user) return null;

//     return (
//       <div className="flex items-center gap-3">
//         <Popover open={profileOpen} onOpenChange={setProfileOpen}>
//           <PopoverTrigger
//             render={
//               <button
//                 type="button"
//                 aria-label="Toggle profile menu"
//                 aria-expanded={profileOpen}
//                 className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F08C2E]/50"
//               >
//                 <Avatar className="h-11 w-11 border-2 border-[#8E54DF] hover:border-[#F08C2E] transition-all cursor-pointer">
//                   <AvatarImage
//                     src={user.image || ""}
//                     alt={user.name || "User"}
//                   />

//                   <AvatarFallback className="bg-[#2A2823] text-[#D6CDBD] font-semibold">
//                     {user.name?.charAt(0)?.toUpperCase() || "U"}
//                   </AvatarFallback>
//                 </Avatar>

//                 {profileOpen ? (
//                   <ChevronUp className="w-4 h-4 text-[#D6CDBD]" />
//                 ) : (
//                   <ChevronDown className="w-4 h-4 text-[#D6CDBD]" />
//                 )}
//               </button>
//             }
//           />

//           <PopoverContent
//             align="end"
//             sideOffset={12}
//             className="w-72 p-0 bg-[#0A0A0E]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-white overflow-hidden"
//           >
//             {/* User Information */}
//             <PopoverHeader className="px-4 py-3 border-b border-white/10 space-y-1">
//               <PopoverTitle className="text-sm font-semibold text-white font-['Space_Grotesk']">
//                 {user.name}
//               </PopoverTitle>

//               <PopoverDescription className="text-xs text-[#D6CDBD]/70 font-['Space_Grotesk']">
//                 {user.email}
//               </PopoverDescription>
//             </PopoverHeader>

//             {/* Menu Items */}
//             <div className="p-2 space-y-1">
//               <Link
//                 href="/create-event"
//                 onClick={handleMenuClose}
//                 className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#D6CDBD] hover:bg-white/5 hover:text-white transition-all font-['Space_Grotesk']"
//               >
//                 <PlusCircle className="h-5 w-5 text-[#F08C2E]" />
//                 Create Event
//               </Link>

//               <Link
//                 href="/manage-event"
//                 onClick={handleMenuClose}
//                 className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#D6CDBD] hover:bg-white/5 hover:text-white transition-all font-['Space_Grotesk']"
//               >
//                 <Settings className="h-5 w-5 text-[#8E54DF]" />
//                 Manage Events
//               </Link>

//               <Link
//                 href="/joined-event"
//                 onClick={handleMenuClose}
//                 className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#D6CDBD] hover:bg-white/5 hover:text-white transition-all font-['Space_Grotesk']"
//               >
//                 <CheckCircle2 className="h-5 w-5 text-[#F08C2E]" />
//                 Joined Events
//               </Link>
//             </div>
//           </PopoverContent>
//         </Popover>

//         {/* Desktop Logout Button */}
//         <button
//           type="button"
//           onClick={handleSignOut}
//           className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-400 border border-red-500/20 hover:bg-red-500/10 transition-all font-['Space_Grotesk']"
//         >
//           <LogOut className="h-4 w-4" />
//           Logout
//         </button>
//       </div>
//     );
//   };

//   return (
//     <nav className="bg-black border-b border-gray-800 px-4 md:px-8 py-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Left Side: Logo */}
//         <Link href="/">
//           <Image
//             src="/soci-dev-logo.png"
//             width={120}
//             height={120}
//             alt="Development Logo"
//           />
//         </Link>

//         {/* Middle: Upcoming Events */}
//         <div className="hidden md:flex items-center gap-2 font-['Space_Grotesk'] text-[#D6CDBD]">
//           <CalendarDays className="w-5 h-5 text-[#D6CDBD]" />

//           <Link
//             href="/events"
//             className="hover:text-[#F08C2E] transition"
//           >
//             Upcoming Events
//           </Link>
//         </div>

//         {/* Right Side: Auth */}
//         <div className="hidden md:flex items-center gap-3">
//           {user ? (
//             <ProfileDropdown />
//           ) : (
//             <>
//               <Link
//                 href="/signin"
//                 className="font-['Space_Grotesk'] bg-black text-white border border-white/20 px-5 py-2 rounded-md hover:bg-white hover:text-black transition duration-200"
//               >
//                 Sign In
//               </Link>

//               <Link
//                 href="/signup"
//                 className="font-['Space_Grotesk'] bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition duration-200 font-medium"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//             aria-label="Toggle Menu"
//             aria-expanded={isOpen}
//           >
//             {isOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-gray-800">
//           {/* Upcoming Events */}
//           <Link
//             href="/events"
//             onClick={handleMenuClose}
//             className="flex items-center justify-center gap-2 font-['Space_Grotesk'] text-[#D6CDBD] hover:text-[#F08C2E] transition"
//           >
//             <CalendarDays className="w-5 h-5" />
//             Upcoming Events
//           </Link>

//           {user ? (
//             <div className="px-2">
//               {/* Mobile User Profile */}
//               <button
//                 type="button"
//                 onClick={() =>
//                   setMobileProfileOpen(!mobileProfileOpen)
//                 }
//                 aria-expanded={mobileProfileOpen}
//                 className="w-full flex items-center justify-between p-3 rounded-xl bg-[#2A2823]/70 border border-white/10"
//               >
//                 <div className="flex items-center gap-3">
//                   <Avatar className="h-10 w-10 border border-[#8E54DF]">
//                     <AvatarImage
//                       src={user.image || ""}
//                       alt={user.name || "User"}
//                     />

//                     <AvatarFallback className="bg-[#2A2823] text-[#D6CDBD]">
//                       {user.name?.charAt(0)?.toUpperCase() || "U"}
//                     </AvatarFallback>
//                   </Avatar>

//                   <div className="text-left">
//                     <p className="text-sm font-semibold text-white">
//                       {user.name}
//                     </p>

//                     <p className="text-xs text-[#D6CDBD]/70">
//                       {user.email}
//                     </p>
//                   </div>
//                 </div>

//                 {mobileProfileOpen ? (
//                   <ChevronUp className="w-4 h-4 text-[#D6CDBD]" />
//                 ) : (
//                   <ChevronDown className="w-4 h-4 text-[#D6CDBD]" />
//                 )}
//               </button>

//               {/* Mobile Profile Links */}
//               {mobileProfileOpen && (
//                 <div className="mt-2 space-y-1">
//                   <Link
//                     href="/create-event"
//                     onClick={handleMenuClose}
//                     className="flex items-center gap-3 px-3 py-3 text-sm text-[#D6CDBD] hover:bg-white/5 rounded-lg"
//                   >
//                     <PlusCircle className="w-5 h-5 text-[#F08C2E]" />
//                     Create Event
//                   </Link>

//                   <Link
//                     href="/manage-event"
//                     onClick={handleMenuClose}
//                     className="flex items-center gap-3 px-3 py-3 text-sm text-[#D6CDBD] hover:bg-white/5 rounded-lg"
//                   >
//                     <Settings className="w-5 h-5 text-[#8E54DF]" />
//                     Manage Events
//                   </Link>

//                   <Link
//                     href="/joined-event"
//                     onClick={handleMenuClose}
//                     className="flex items-center gap-3 px-3 py-3 text-sm text-[#D6CDBD] hover:bg-white/5 rounded-lg"
//                   >
//                     <CheckCircle2 className="w-5 h-5 text-[#F08C2E]" />
//                     Joined Events
//                   </Link>

//                   {/* Mobile Logout */}
//                   <button
//                     type="button"
//                     onClick={handleSignOut}
//                     className="w-full flex items-center gap-3 px-3 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-lg"
//                   >
//                     <LogOut className="w-5 h-5" />
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="flex flex-col w-full gap-2 px-4">
//               <Link
//                 href="/signin"
//                 onClick={handleMenuClose}
//                 className="font-['Space_Grotesk'] text-center bg-black text-white border border-white/20 px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
//               >
//                 Sign In
//               </Link>

//               <Link
//                 href="/signup"
//                 onClick={handleMenuClose}
//                 className="font-['Space_Grotesk'] text-center bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition font-medium"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

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
  ChevronDown,
  ChevronUp,
  Sun,
  Moon,
} from "lucide-react";

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="p-2 rounded-full border border-border"
        aria-label="Change theme"
      >
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      className="p-2.5 rounded-full border border-border
      bg-card text-foreground hover:bg-accent
      transition-all duration-300"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-orange-400" />
      ) : (
        <Moon className="w-5 h-5 text-purple-600" />
      )}
    </button>
  );
}

const Navbar = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Logout Function
  const handleSignOut = async () => {
    try {
      await authClient.signOut();

      setIsOpen(false);
      setMobileProfileOpen(false);
      setProfileOpen(false);

      router.push("/signin");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close all menus after navigation
  const handleMenuClose = () => {
    setProfileOpen(false);
    setMobileProfileOpen(false);
    setIsOpen(false);
  };

  // Profile Dropdown Menu
  const ProfileDropdown = () => {
    if (!user) return null;

    return (
      <div className="flex items-center gap-3">
        <Popover open={profileOpen} onOpenChange={setProfileOpen}>
          <PopoverTrigger
            render={
              <button
                type="button"
                aria-label="Toggle profile menu"
                aria-expanded={profileOpen}
                className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F08C2E]/50"
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

                {profileOpen ? (
                  <ChevronUp className="w-4 h-4 text-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-foreground" />
                )}
              </button>
            }
          />

          <PopoverContent
            align="end"
            sideOffset={12}
            className="w-72 p-0 bg-popover backdrop-blur-2xl border border-border rounded-2xl shadow-xl text-popover-foreground overflow-hidden"
          >
            {/* User Information */}
            <PopoverHeader className="px-4 py-3 border-b border-border space-y-1">
              <PopoverTitle className="text-sm font-semibold text-foreground font-heading">
                {user.name}
              </PopoverTitle>

              <PopoverDescription className="text-xs text-muted-foreground font-heading">
                {user.email}
              </PopoverDescription>
            </PopoverHeader>

            {/* Menu Items */}
            <div className="p-2 space-y-1">
              <Link
                href="/create-event"
                onClick={handleMenuClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-all font-heading"
              >
                <PlusCircle className="h-5 w-5 text-[#F08C2E]" />
                Create Event
              </Link>

              <Link
                href="/manage-event"
                onClick={handleMenuClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-all font-heading"
              >
                <Settings className="h-5 w-5 text-[#8E54DF]" />
                Manage Events
              </Link>

              <Link
                href="/joined-event"
                onClick={handleMenuClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-all font-heading"
              >
                <CheckCircle2 className="h-5 w-5 text-[#F08C2E]" />
                Joined Events
              </Link>
            </div>
          </PopoverContent>
        </Popover>

        {/* Desktop Logout Button */}
        <button
          type="button"
          onClick={handleSignOut}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-500 border border-red-500/20 hover:bg-red-500/10 transition-all font-heading"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    );
  };

  return (
    <nav className="bg-background text-foreground border-b border-border px-4 md:px-8 py-4 transition-colors duration-300">
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
        <div className="hidden md:flex items-center gap-2 font-heading text-foreground">
          <CalendarDays className="w-5 h-5" />

          <Link
            href="/events"
            className="hover:text-[#F08C2E] transition"
          >
            Upcoming Events
          </Link>
        </div>

        {/* Right Side: Auth + Theme */}
        <div className="hidden md:flex items-center gap-3">

          <ThemeToggle />

          {user ? (
            <ProfileDropdown />
          ) : (
            <>
              <Link
                href="/signin"
                className="font-heading bg-transparent text-foreground border border-border px-5 py-2 rounded-md hover:bg-accent transition duration-200"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="font-heading bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition duration-200 font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Theme + Menu Button */}
        <div className="md:hidden flex items-center gap-3">

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
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
        <div className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-border">

          {/* Upcoming Events */}
          <Link
            href="/events"
            onClick={handleMenuClose}
            className="flex items-center justify-center gap-2 font-heading text-foreground hover:text-[#F08C2E] transition"
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
                aria-expanded={mobileProfileOpen}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-card border border-border"
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
                    <p className="text-sm font-semibold text-foreground">
                      {user.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>

                {mobileProfileOpen ? (
                  <ChevronUp className="w-4 h-4 text-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-foreground" />
                )}
              </button>

              {/* Mobile Profile Links */}
              {mobileProfileOpen && (
                <div className="mt-2 space-y-1">

                  <Link
                    href="/create-event"
                    onClick={handleMenuClose}
                    className="flex items-center gap-3 px-3 py-3 text-sm text-foreground hover:bg-accent rounded-lg"
                  >
                    <PlusCircle className="w-5 h-5 text-[#F08C2E]" />
                    Create Event
                  </Link>

                  <Link
                    href="/manage-event"
                    onClick={handleMenuClose}
                    className="flex items-center gap-3 px-3 py-3 text-sm text-foreground hover:bg-accent rounded-lg"
                  >
                    <Settings className="w-5 h-5 text-[#8E54DF]" />
                    Manage Events
                  </Link>

                  <Link
                    href="/joined-event"
                    onClick={handleMenuClose}
                    className="flex items-center gap-3 px-3 py-3 text-sm text-foreground hover:bg-accent rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F08C2E]" />
                    Joined Events
                  </Link>

                  {/* Mobile Logout */}
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-3 py-3 text-sm text-red-500 hover:bg-red-500/10 rounded-lg"
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
                onClick={handleMenuClose}
                className="font-heading text-center bg-background text-foreground border border-border px-5 py-2 rounded-md hover:bg-accent transition"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={handleMenuClose}
                className="font-heading text-center bg-[#F08C2E] text-black px-5 py-2 rounded-md hover:opacity-90 transition font-medium"
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
