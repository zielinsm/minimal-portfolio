npm run build
cd public

git init
git config user.name "Michał Zieliński"
git config user.email "zielinski-michal@outlook.com"

git add .
git commit -m "Deploy from CircleCI"

git push --force --quiet "https://${GH_TOKEN}@github.com/zielinsm/minimal-portfolio.git" master:gh-pagesn