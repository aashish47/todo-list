
# Vocabulary

Build vocabulary by adding new words you come across every day.

![vocab47 vercel app_s (1)](https://github.com/user-attachments/assets/b285abfb-688f-4adc-9b1d-2623aeebd864)


## Installation


### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 20.11.1 (Download and install [Node.js](https://nodejs.org/) if you haven't already)

### Clone the repository

```bash
git clone https://github.com/aashish47/vocabulary.git
```

### Setting up Supabase and Google Auth

Before running the project, you'll need to set up Supabase for database management and Google Auth for user authentication. Follow these steps to configure Supabase and obtain the necessary keys:

1. **Set up Supabase Project and Google Auth**: 
   - Create a Supabase project and enable Google Auth.
   - Obtain the Supabase project URL, API key, Google Client ID, and Client Secret.
   - Add `http://localhost:3000` as an allowed redirect URL in Supabase Auth settings. (authentication -> url configuration -> site url)

   For detailed instructions, refer to the [Supabase Authentication Guide](https://supabase.com/docs/guides/auth/auth-deep-dive/auth-google-oauth).


### Rename `.env.example` and `.env.local.example` files

1. Rename `.env.local.example` to `.env.local` and add the required keys.
2. Rename `.env.example` to `.env` and add the required keys.

Required keys will be available at project settings -> configuration -> configuration -> Api and -> Database
Once you have obtained the necessary keys and configured Supabase and Google Auth, add them to your project's environment variables.

### Install dependencies

```bash
cd vocabulary
npm install

```
### Generate prisma client

```bash
cd vocabulary
npx prisma generate

```

### Run the application

```bash
cd vocabulary
npm run dev

```
Open `http://localhost:3000` with your browser to see the result.

## Contribution

Contributions to Finance Tracker are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
