import { TargetOptions } from '@angular-builders/custom-webpack';

// main.js を矯正リロードさせるためのクエリを付加する
export default (_: TargetOptions, indexHtml: string) => {
    // TargetOptions はこんな内容であんまり役に立たない
    // { project: 'dqxarmor', configuration: '', target: 'build' }
    return indexHtml.replace(
        // ハッシュはついていない前提(ついていたらそもそもこの処理は必要ない)
        /main\.js"/,
        `main.js?${new Date().getTime()}"`
    );
};
