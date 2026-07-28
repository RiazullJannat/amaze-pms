"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2, Building2, User, Mail, Phone } from "lucide-react";
import { useDemoModal } from "@/src/context/DemoModalContext";
import { cn } from "@/src/lib/utils";

interface FormData {
  name: string;
  hotelName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  hotelName?: string;
  email?: string;
  phone?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.hotelName.trim()) errors.hotelName = "Hotel / property name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-().]{7,20}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  return errors;
}

const INITIAL: FormData = { name: "", hotelName: "", email: "", phone: "" };

export function DemoModal() {
  const { open, closeModal } = useDemoModal();
  const [form, setForm] = React.useState<FormData>(INITIAL);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // Reset form when modal closes
  React.useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm(INITIAL);
        setErrors({});
        setTouched({});
        setSubmitting(false);
        setSuccess(false);
      }, 350); // after exit animation
    }
  }, [open]);

  // Close on Escape key
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  // Prevent background scroll
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        const partial = validate({ ...form, [field]: value });
        if (partial[field]) next[field] = partial[field];
        else delete next[field];
        return next;
      });
    }
  };

  const handleBlur = (field: keyof FormData) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const partial = validate(form);
    setErrors((prev) => ({ ...prev, [field]: partial[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, hotelName: true, email: true, phone: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    // Simulate async API call
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            className="fixed inset-0 z-[60] bg-[#0a0f1d]/70 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
            aria-labelledby="demo-modal-title"
            onClick={closeModal}
          >
            {/* stopPropagation prevents clicks inside the card from bubbling up to closeModal */}
            <div
              className="relative w-full max-w-lg rounded-2xl border border-slate-700/60 bg-[#0d1424]/90 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400" />
              {/* Ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-600/15 blur-[80px] rounded-full pointer-events-none" />

              {/* Close button — z-20 to sit above the z-10 content wrapper */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/10 transition-all"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {success ? (
                    /* ── SUCCESS STATE ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center text-center py-8 gap-5"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center"
                      >
                        <CheckCircle size={32} className="text-emerald-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-50 mb-2">You&apos;re all set! 🎉</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                          Thank you! Our team will contact you within{" "}
                          <span className="text-indigo-300 font-semibold">2 hours</span> to schedule your personalised demo.
                        </p>
                      </div>
                      <button
                        onClick={closeModal}
                        className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-semibold shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:opacity-90 transition-opacity"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    /* ── FORM STATE ── */
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {/* Header */}
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 px-3 py-1 mb-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-widest">Free Consultation</span>
                        </div>
                        <h2 id="demo-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight leading-tight">
                          Book Your Free{" "}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            Live Demo
                          </span>
                        </h2>
                        <p className="text-slate-400 text-sm mt-2">
                          See AmazePMS in action. No credit card. No strings attached.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        {/* Name */}
                        <Field
                          id="demo-name"
                          label="Full Name"
                          icon={<User size={15} />}
                          type="text"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange("name")}
                          onBlur={handleBlur("name")}
                          error={touched.name ? errors.name : undefined}
                        />
                        {/* Hotel Name */}
                        <Field
                          id="demo-hotel"
                          label="Hotel / Property Name"
                          icon={<Building2 size={15} />}
                          type="text"
                          placeholder="The Grand Palace Hotel"
                          value={form.hotelName}
                          onChange={handleChange("hotelName")}
                          onBlur={handleBlur("hotelName")}
                          error={touched.hotelName ? errors.hotelName : undefined}
                        />
                        {/* Email */}
                        <Field
                          id="demo-email"
                          label="Work Email"
                          icon={<Mail size={15} />}
                          type="email"
                          placeholder="jane@hotelname.com"
                          value={form.email}
                          onChange={handleChange("email")}
                          onBlur={handleBlur("email")}
                          error={touched.email ? errors.email : undefined}
                        />
                        {/* Phone */}
                        <Field
                          id="demo-phone"
                          label="Phone Number"
                          icon={<Phone size={15} />}
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          onBlur={handleBlur("phone")}
                          error={touched.phone ? errors.phone : undefined}
                        />

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 mt-2"
                        >
                          {submitting ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Sending request…
                            </>
                          ) : (
                            "Request My Free Demo →"
                          )}
                        </button>

                        <p className="text-center text-xs text-slate-500 pt-1">
                          Our team typically responds within 2 business hours.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Reusable Field Component ── */
interface FieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error?: string;
}

function Field({ id, label, icon, type, placeholder, value, onChange, onBlur, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <span className={cn("absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors", error ? "text-rose-400" : "text-slate-500")}>
          {icon}
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "off"}
          className={cn(
            "w-full bg-slate-900/60 border rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all duration-200",
            "focus:ring-2 focus:ring-offset-0",
            error
              ? "border-rose-500/60 focus:border-rose-400 focus:ring-rose-500/25"
              : "border-slate-700/60 hover:border-slate-600 focus:border-indigo-500/60 focus:ring-indigo-500/20"
          )}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-rose-400 mt-1.5 pl-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
