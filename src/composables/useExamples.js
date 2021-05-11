import { ref, onMounted } from "vue";
import { findExamples } from "../services/examples";

export default function useExamples(query) {
  const examples = ref([]);

  onMounted(async () => {
    examples.value = await findExamples(query);
  });

  return examples;
}
