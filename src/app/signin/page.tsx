"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

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

import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sign In Function
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      if (data) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Google Sign In
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-brand/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-brand-2/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Sign In Container */}
      <div className="w-full max-w-md relative z-10">
        {/* Sign In Card */}
        <Card className="w-full bg-elevated/70 backdrop-blur-2xl border border-border rounded-2xl px-6 sm:px-9 py-7 sm:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-foreground">
          {/* Heading */}
          <CardHeader className="text-center px-0 pt-0 pb-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
              Welcome Back
            </CardTitle>

            <CardDescription className="text-muted-foreground text-sm">
              Sign in to organize and join community drives
            </CardDescription>
          </CardHeader>

          <CardContent className="px-0 pb-0">
            <form onSubmit={handleSignIn} className="space-y-4">
              {/* Email & Password Fields */}
              <FieldGroup className="space-y-3">
                {/* Email */}
                <Field className="space-y-1">
                  <FieldLabel
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </FieldLabel>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-brand" />
                    </span>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="w-full h-12 bg-inset border border-border rounded-xl pl-10 pr-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-brand/40 focus-visible:border-brand transition-all backdrop-blur-md"
                    />
                  </div>
                </Field>

                {/* Password */}
                <Field className="space-y-1">
                  <div className="flex items-center justify-between">
                    <FieldLabel
                      htmlFor="password"
                      className="text-sm font-medium text-foreground"
                    >
                      Password
                    </FieldLabel>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-medium text-brand hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Lock className="w-4 h-4 text-brand-2" />
                    </span>

                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="w-full h-12 bg-inset border border-border rounded-xl pl-10 pr-10 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-brand/40 focus-visible:border-brand transition-all backdrop-blur-md"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </Field>
              </FieldGroup>

              {/* Sign In Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-xl font-bold text-black bg-gradient-to-r from-brand to-brand-2 hover:opacity-90 transition-all duration-300 shadow-md shadow-brand/20 text-sm cursor-pointer"
              >
                {isLoading ? "Signing In..." : "Sign In"}

                {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />

              <span className="text-xs font-medium text-muted-foreground/80">
                OR CONTINUE WITH
              </span>

              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Google Sign In */}
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full h-12 rounded-xl text-foreground hover:bg-muted text-sm font-semibold transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5 mr-2"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34 5.9 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.3-.4-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34 5.9 29.3 4 24 4c-7.7 0-14.4 4.4-17.7 10.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.1 0 9.8-1.9 13.3-5.1l-6.1-5.2C29.2 35.2 26.7 36 24 36c-5.2 0-9.7-3.3-11.3-8H6.1C9.3 36.2 16.1 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.1 5.2C41.3 35.2 44 30 44 24c0-1.2-.1-2.3-.4-3.5z"
                />
              </svg>
              Continue with Google
            </Button>

            {/* Register Link */}
            <div className="text-center mt-6">
              <FieldDescription className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-brand font-semibold hover:underline"
                >
                  Register here
                </Link>
              </FieldDescription>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
