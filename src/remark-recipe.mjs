// Explicit wrappers keep recipe layout and print behavior independent of heading order.
export default function remarkRecipe() {
  return (tree) => {
    const index = tree.children.findIndex((node) => node.type === 'heading' && node.depth === 2 && node.children.some((child) => child.value === 'Recipe'));
    if (index < 0) return;
    tree.children.splice(index, 0, { type: 'html', value: '</div><section class="recipe-card" aria-labelledby="recipe">' });
    tree.children.unshift({ type: 'html', value: '<div class="recipe-story">' });
    tree.children.push({ type: 'html', value: '</section>' });
  };
}
