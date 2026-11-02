

// import { useEffect, useState } from "react";
// // Shadcn UI অথবা সাধারণ কম্পোনেন্ট ব্যবহার করতে পারেন
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash2, Edit } from "lucide-react"; // Lucide Icon থেকে আইকন
// import { auth } from "@/lib/auth";
// import headers from "next/headers"



// interface EventType {
//   _id: string;
//   title: string;
//   description: string;
//   date: string;
//   location: string;
//   user: string
// }

// export default async function ManageEventPage() {
// const session = await auth.api.getSession({
//   headers  //aro kaj korte hobe
// })


//   const [events, setEvents] = useState<EventType[]>([]);
//   const [loading, setLoading] = useState(true);

//   ধরে নিচ্ছি ইউজারের ইমেইল কোনো স্টেট বা সেশন থেকে পাচ্ছেন
//   const userEmail = "user@example.com"; // এখানে আপনার অথেন্টিকেশন সিস্টেমের ইউজার ইমেইল বসবে

//   useEffect(() => {
//     async function fetchMyEvents() {
//       try {
//         const res = await fetch(`http://localhost:5000/api/events/my-events?email=${userEmail}`);
//         const data = await res.json();
//         setEvents(data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (userEmail) {
//       fetchMyEvents();
//     }
//   }, [userEmail]);

//   ইভেন্ট ডিলিট করার ফাংশন (ঐচ্ছিক কিন্তু ম্যানেজ পেজের জন্য জরুরি)
//   const handleDelete = async (id: string) => {
//     ডিলিট API কল করার লজিক এখানে হবে
//     setEvents(events.filter(event => event._id !== id));
//   };

//   if (loading) return <p className="text-center mt-10">Loading your events...</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Manage My Events</h1>

//       {events.length === 0 ? (
//         <p className="text-gray-500">You haven't created any events yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <Card key={event._id} className="shadow-md">
//               <CardHeader>
//                 <CardTitle className="text-xl">{event.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 text-sm mb-2">{event.description}</p>
//                 <p className="text-xs text-gray-400 mb-1">📅 Date: {event.date}</p>
//                 <p className="text-xs text-gray-400 mb-4">📍 Location: {event.location}</p>
                
//                 {/* Shadcn UI এবং Lucide Icons ব্যবহার করে Edit ও Delete বাটন */}
//                 <div className="flex justify-end gap-2">
//                   <Button variant="outline" size="sm">
//                     <Edit className="w-4 h-4 mr-1" /> Edit
//                   </Button>
//                   <Button variant="destructive" size="sm" onClick={() => handleDelete(event._id)}>
//                     <Trash2 className="w-4 h-4 mr-1" /> Delete
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

// const ManageEventPage = async() => {
//   const session = auth.api.getSession({
//     headers: await headers()
//   })
//   const user = session?.user
  
//   const res = await fetch(`http://localhost:5000/my-events/${user?.email}`)
//   const createEvent = await res.json()

//   console.log('createEvent', createEvent)

//   return (
//     <div>
//       ManageEventPage
//     </div>
//   );
// };

// export default ManageEventPage;