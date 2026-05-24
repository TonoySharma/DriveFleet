
// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FcGoogle } from 'react-icons/fc';
// import { Checkbox, Form, InputGroup } from "@heroui/react";
// import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
// import {
//   Button,
//   FieldError,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import { redirect } from 'next/navigation';
// import { authClient } from '../../../lib/auth-client';
// import toast from 'react-hot-toast';




// export default function LoginInPage() {

//   const [isVisible, setIsVisible] = useState(false);

//   // signup
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const userData = Object.fromEntries(formData.entries());
//     // console.log( userData);

//     const { data, error } = await authClient.signIn.email({

//       email: userData.email,
//       password: userData.password,
//       // callbackURL: "/",
//     });
//     // console.log({data, error});

  

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     if (data) {
//       toast.success("Login successful");
//     }

//       setTimeout(() => {
//     router.push("/");
//   }, 2500);

//     if (data) {
//       redirect("/")
//     }
//   };

//   const handleGoogleSingIn = async () => {
//     await authClient.signIn.social({
//       provider: "google"
//     })
//   }





//   return (
//     <div className="min-h-screen w-full flex
//      bg-[#FDFBF7] font-sans overflow-hidden">

//       {/* LEFT SIDE */}
//       <div className="hidden lg:flex w-1/2
//        bg-[#0E0E0E] text-white p-10 flex-col 
//        justify-between relative overflow-hidden mt-15">

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex items-center gap-2 z-10"
//         >

//           <div className="grid grid-cols-2 gap-1 w-6 h-6">
//             <span className="bg-[#E25C34] rounded-sm"></span>
//             <span className="bg-gray-600 rounded-sm"></span>
//             <span className="bg-gray-600 rounded-sm"></span>
//             <span className="bg-[#E25C34] rounded-sm"></span>
//           </div>

//           <span className="text-xl font-bold tracking-wide">
//             Drive
//             <span className="text-[#E25C34]">Fleet</span>
//           </span>
//         </motion.div>

//         <div className="z-10 my-auto space-y-8">

//           <div>
//             <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
//               Premium Fleet
//             </p>

//             <h2 className="text-2xl font-semibold tracking-tight">
//               Luxury & Sports Cars
//             </h2>
//           </div>

//           <div className="flex gap-6">

//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//               whileHover={{ scale: 1.03 }}
//               className="w-1/2 aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl"
//             >

//               <img
//                 src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600"
//                 alt="Luxury Sedan"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

//               <p className="absolute bottom-4 left-4 text-sm font-medium">
//                 Audi RS e-tron, Germany
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//               whileHover={{ scale: 1.03 }}
//               className="w-1/2 aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl"
//             >

//               <img
//                 src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600"
//                 alt="Sports Car"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

//               <p className="absolute bottom-4 left-4 text-sm font-medium">
//                 Mercedes-AMG, Germany
//               </p>
//             </motion.div>

//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="z-10"
//         >

//           <p className="text-xl font-light leading-relaxed">
//             Your journey, elevated in{" "}
//             <span className="text-[#E25C34] font-medium italic">
//               every drive.
//             </span>
//           </p>

//           <p className="text-xs text-gray-500 mt-2">
//             DriveFleet Premium Rental Community
//           </p>
//         </motion.div>

//         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#E25C34] rounded-full blur-[120px] opacity-20 pointer-events-none" />
//       </div>

//       {/* RIGHT SIDE */}
//       <div
//         className="
//     w-full lg:w-1/2
//     flex items-center justify-center
//     px-6 sm:px-10 lg:px-16
//     py-12
//     mt-10 lg:mt-0
//   "
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="w-full max-w-md mx-auto space-y-8"
//         >

//           <div>
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-4 mb-1">
//               Login Your Account
//             </h1>
//           </div>

//           <Form className="space-y-5" onSubmit={onSubmit}>

//             {/* Email */}
//             <TextField
//               isRequired
//               name="email"
//               type="email"
//               validate={(value) => {
//                 if (
//                   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
//                 ) {
//                   return "Please enter a valid email address";
//                 }
//                 return null;
//               }}
//             >

//               <Label>Email</Label>

//               <Input
//                 placeholder="Enter Your Email"
//                 className="w-full rounded border
//           border-gray-200 bg-white shadow-sm py-4"
//               />

//               <FieldError />
//             </TextField>

//             {/* Password */}
//             <TextField
//               className="w-full"
//               isRequired
//               validate={(value) => {
//                 if (value.length < 8) {
//                   return "Password must be at least 8 characters";
//                 }

//                 if (!/[A-Z]/.test(value)) {
//                   return "Password must contain at least one uppercase letter";
//                 }

//                 if (!/[0-9]/.test(value)) {
//                   return "Password must contain at least one number";
//                 }

//                 return null;
//               }}
//             >

//               <Label>Password</Label>

//               <InputGroup
//                 className="
//             rounded border border-gray-200
//             overflow-hidden bg-white shadow-sm
//           "
//               >

//                 <InputGroup.Input
//                   className="w-full py-4"
//                   type={isVisible ? "text" : "password"}
//                   name="password"
//                   placeholder="Enter your password"
//                 />

//                 <InputGroup.Suffix>

//                   <Button
//                     type="button"
//                     isIconOnly
//                     aria-label={isVisible ? "Hide password" : "Show password"}
//                     size="sm"
//                     variant="ghost"
//                     onPress={() => setIsVisible(!isVisible)}
//                   >
//                     {
//                       isVisible
//                         ? <Eye className="size-4" />
//                         : <EyeSlash className="size-4" />
//                     }
//                   </Button>

//                 </InputGroup.Suffix>

//               </InputGroup>

//               <FieldError />
//             </TextField>

//             {/* Checkbox */}
//             <Checkbox value="terms">

//               <Checkbox.Control className="bg-[#E25C34] rounded-full">
//                 <Checkbox.Indicator />
//               </Checkbox.Control>

//               <Checkbox.Content>
//                 <Label>Accept Terms & Conditions</Label>
//               </Checkbox.Content>

//             </Checkbox>

//             {/* Submit Button */}
//             <motion.div
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.99 }}
//             >

//               <Button
//                 type="submit"
//                 className="
//             w-full bg-gray-800 text-white
//             py-6 min-h-[56px]
//             rounded font-medium
//             text-sm flex items-center justify-center
//             gap-2 shadow-lg
//             hover:bg-zinc-900
//             transition-colors
//             cursor-pointer">
//                 <Check />
//                 Login
//               </Button>

//             </motion.div>

//           </Form>

//           {/* Divider */}
//           <div className="relative flex items-center">

//             <div className="flex-grow border-t border-gray-200"></div>

//             <span
//               className="
//           flex-shrink mx-4 text-xs
//           text-gray-400 uppercase tracking-widest
//         "
//             >
//               or
//             </span>

//             <div className="flex-grow border-t border-gray-200"></div>

//           </div>

//           {/* Google Button */}
//           <motion.button
//             onClick={handleGoogleSingIn}
//             whileHover={{ scale: 1.01 }}
//             whileTap={{ scale: 0.99 }}
//             className="
//         w-full cursor-pointer
//         bg-gray-200 border border-gray-300
//         text-black rounded
//         font-medium text-sm
//         flex items-center justify-center gap-2
//         shadow-sm py-4
//       "
//           >

//             <FcGoogle className="text-xl" />

//             <span className="font-semibold">
//               Continue with Google
//             </span>

//           </motion.button>

//           {/* Login Link */}
//           <h2
//             className="
//         text-center text-sm text-gray-500
//         mt-4 flex items-center justify-center gap-1">

//             Already have an account?

//             <Link href={"/register"}>
//               <p
//                 className="
//             text-[#E25C34]
//             font-semibold
//             hover:underline
//             cursor-pointer
//           "
//               >
//                 Sign in
//               </p>
//             </Link>

//           </h2>

//         </motion.div>
//       </div>
//     </div>
//   );
// }