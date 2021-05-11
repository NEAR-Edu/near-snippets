import { ref, onMounted } from "vue";
import { findByTopic } from "../services/examples";

export default function useExamples(topic) {
  const examples = ref([]);

  onMounted(async () => {
    examples.value = await findByTopic(topic);
  });

  return examples;
}
