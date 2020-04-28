set +x
echo "releasing new build `date`"
git add -A .
git commit -m $1
git push -u origin master