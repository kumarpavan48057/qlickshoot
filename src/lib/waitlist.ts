import { supabase } from './supabase';

export type WaitlistEntry = {
  name: string;
  email: string;
};

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: 'duplicate' | 'network' | 'unknown'; message: string };

export async function joinWaitlist({
  name,
  email,
}: WaitlistEntry): Promise<WaitlistResult> {

  if (!supabase) {
    return {
      ok: false,
      error: 'network',
      message: 'Waitlist is temporarily unavailable.',
    };
  }

  try {
    const { error } = await supabase
      .from('waitlist')
      .insert({ name, email });

    if (!error) return { ok: true };

    if (error.code === '23505') {
      return {
        ok: false,
        error: 'duplicate',
        message: "You're already on the waitlist.",
      };
    }

    return {
      ok: false,
      error: 'unknown',
      message: error.message,
    };
  } catch {
    return {
      ok: false,
      error: 'network',
      message: 'Network error.',
    };
  }
}
