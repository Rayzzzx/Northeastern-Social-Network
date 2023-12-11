import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "383089756562-nfrtqodcihq4opk866rgggetbf9nauba.apps.googleusercontent.com",
      clientSecret: "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"
    }),
    // ...add more providers here
    AzureADProvider({
      clientId: "417b5c15-a1e2-420a-8365-6808a28a97a2",
      clientSecret: "wFB8Q~tHjOOYGq9kUOgrFy8qoyGCSys7Wz3eQdq9",
      tenantId: "a8eec281-aaa3-4dae-ac9b-9a398b9215e7",
    }),
  ],
});
