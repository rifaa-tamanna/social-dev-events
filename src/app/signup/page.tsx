
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient, signIn } from "@/lib/auth-client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  User,
  Mail,
  Image as ImageIcon,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  // Password validation
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasMinLength = password.length >= 6;

  const isPasswordValid =
    hasUpperCase && hasLowerCase && hasMinLength;

  // Signup Function
  const handleSignUp = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!isPasswordValid) {
      alert("Please fulfill all password requirements!");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
    });

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    if (data) {
      router.push("/");
    }
  };

  const handleGoogleSignUp = async() => {
    const googleAuth = await signIn.social({
      provider: 'google'
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-brand/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-brand-2/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Signup Container */}
      <div className="w-full max-w-md relative z-10">

        {/* Signup Card */}
        <Card className="w-full bg-elevated/70 backdrop-blur-2xl border border-border rounded-2xl px-6 sm:px-9 py-7 sm:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-foreground">

          {/* Heading */}
          <CardHeader className="text-center px-0 pt-0 pb-6">

            <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
              Create Account
            </CardTitle>

            <CardDescription className="text-muted-foreground text-sm">
              Join the community and start driving social change
            </CardDescription>

          </CardHeader>

          {/* Form */}
          <CardContent className="px-0 pb-0">

            <form
              onSubmit={handleSignUp}
              className="space-y-4"
            >

              <FieldGroup className="space-y-4">

                {/* Full Name */}
                <Field className="space-y-1">

                  <FieldLabel
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full Name
                  </FieldLabel>

                  <div className="relative">

                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <User className="w-4 h-4 text-brand" />
                    </span>

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Rifa Tamanna"
                      required
                      className="w-full h-11 bg-inset border border-border rounded-xl pl-10 pr-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-brand/40 focus-visible:border-brand transition-all backdrop-blur-md"
                    />

                  </div>

                </Field>

                {/* Email Address */}
                <Field className="space-y-1">

                  <FieldLabel
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address
                  </FieldLabel>

                  <div className="relative">

                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-brand-2" />
                    </span>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="w-full h-11 bg-inset border border-border rounded-xl pl-10 pr-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-brand/40 focus-visible:border-brand transition-all backdrop-blur-md"
                    />

                  </div>

                </Field>

                {/* Profile Photo URL */}
                <Field className="space-y-1">

                  <FieldLabel
                    htmlFor="image"
                    className="text-sm font-medium text-foreground"
                  >
                    Profile Photo URL
                  </FieldLabel>

                  <div className="relative">

                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <ImageIcon className="w-4 h-4 text-brand" />
                    </span>

                    <Input
                      id="image"
                      name="image"
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      className="w-full h-11 bg-inset border border-border rounded-xl pl-10 pr-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-brand/40 focus-visible:border-brand transition-all backdrop-blur-md"
                    />

                  </div>

                  <FieldDescription className="text-xs text-muted-foreground/70 mt-1">
                    Optional: Leave empty for default avatar
                  </FieldDescription>

                </Field>

                {/* Password */}
                <Field className="space-y-1">

                  <FieldLabel
                    htmlFor="password"
                    className="text-sm font-medium text-foreground"
                  >
                    Password
                  </FieldLabel>

                  <div className="relative">

                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Lock className="w-4 h-4 text-brand-2" />
                    </span>

                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      placeholder="••••••••"
                      required
                      className="w-full h-11 bg-inset border border-border rounded-xl pl-10 pr-10 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-brand/40 focus-visible:border-brand transition-all backdrop-blur-md"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>

                  </div>

                  {/* Password Requirements */}
                  <div className="space-y-1.5 pt-2 text-xs">

                    <p
                      className={`flex items-center gap-2 ${
                        hasUpperCase
                          ? "text-success"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {hasUpperCase ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <X className="w-3.5 h-3.5" />
                      )}

                      At least one uppercase letter (A-Z)
                    </p>

                    <p
                      className={`flex items-center gap-2 ${
                        hasLowerCase
                          ? "text-success"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {hasLowerCase ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <X className="w-3.5 h-3.5" />
                      )}

                      At least one lowercase letter (a-z)
                    </p>

                    <p
                      className={`flex items-center gap-2 ${
                        hasMinLength
                          ? "text-success"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {hasMinLength ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <X className="w-3.5 h-3.5" />
                      )}

                      Minimum 6 characters length
                    </p>

                  </div>

                </Field>

                {/* Register Button */}
                <div className="pt-2">

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl font-bold text-black bg-gradient-to-r from-brand to-brand-2 hover:opacity-90 transition-all duration-300 shadow-md shadow-brand/20 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Register

                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-center py-[10px]">OR</p>
                  <Button 
                    onClick={handleGoogleSignUp}
                    type="submit"
                    className="w-full h-12 rounded-xl font-bold text-black bg-brand hover:opacity-90 transition-all duration-300 shadow-md shadow-brand/20 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Sign Up with Google

                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                </div>

              </FieldGroup>

            </form>

            {/* Login Link */}
            <div className="text-center mt-6">

              <FieldDescription className="text-sm text-muted-foreground">
                Already have an account?{" "}

                <Link
                  href="/signin"
                  className="text-brand font-semibold hover:underline"
                >
                  Sign In
                </Link>

              </FieldDescription>

            </div>

          </CardContent>

        </Card>

      </div>

    </div>
  );
}
