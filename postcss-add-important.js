import picomatch from "picomatch";
import path from "node:path";

const plugin = (opts = {}) => {
  const { includes = ["*"], excludes = [] } = opts;

  return {
    postcssPlugin: "postcss-add-important",
    Once(root, { result }) {
      const from = result.opts.from;
      const filePath = from ?? "";
      const rootDir = process.cwd();
      const relPath = path.relative(rootDir, filePath);

      const included = picomatch.isMatch(relPath, includes, { windows: true });
      const excluded = picomatch.isMatch(relPath, excludes, { windows: true });

      if (included) {
        // console.log(relPath, includes);
        root.walkDecls((decl) => {
          if (decl.important) return;
          decl.important = true;
        });
      }
    },
  };
};

plugin.postcss = true;
export default plugin;
