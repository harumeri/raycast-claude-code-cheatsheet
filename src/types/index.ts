export interface Command {
  id: string;
  name: string;
  description: string;
  usage: string;
  example?: string;
  deprecated?: boolean;
  warning?: boolean;
  isNew?: boolean;
  alternative?: string;
  category: "basic" | "flag" | "slash" | "thinking" | "settings" | "environment";
  tags: string[];
}

export interface ThinkingKeyword {
  keyword: string;
  budget: "max" | "mid" | "min";
  tokens: number;
  description: string;
  example?: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  commands?: Command[];
  thinkingKeywords?: ThinkingKeyword[];
}

export interface CheatsheetData {
  sections: Section[];
}

export type CategoryType = "all" | "basic" | "flag" | "slash" | "thinking" | "settings" | "environment";
export type BudgetType = "max" | "mid" | "min";
