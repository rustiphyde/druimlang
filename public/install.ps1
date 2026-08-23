$ErrorActionPreference = "Stop"

$downloadUrl = "https://druimlang.com/downloads/windows/druim.exe"

$installDirectory = Join-Path $env:LOCALAPPDATA "Druim\bin"
$installBinary = Join-Path $installDirectory "druim.exe"

Write-Host "Installing Druim..."

New-Item `
    -ItemType Directory `
    -Path $installDirectory `
    -Force | Out-Null

$tempFile = Join-Path $env:TEMP "druim.exe"

try {
    Invoke-WebRequest `
        -Uri $downloadUrl `
        -OutFile $tempFile

    Copy-Item `
        -Path $tempFile `
        -Destination $installBinary `
        -Force
}
finally {
    if (Test-Path $tempFile) {
        Remove-Item `
            -Path $tempFile `
            -Force
    }
}

$userPath = [Environment]::GetEnvironmentVariable(
    "Path",
    "User"
)

$pathEntries = @()

if ($userPath) {
    $pathEntries = $userPath.Split(
        ";",
        [System.StringSplitOptions]::RemoveEmptyEntries
    )
}

$alreadyOnPath = $pathEntries |
    Where-Object {
        $_.TrimEnd("\") -ieq $installDirectory.TrimEnd("\")
    }

if (-not $alreadyOnPath) {
    $newUserPath = if ($userPath) {
        "$userPath;$installDirectory"
    }
    else {
        $installDirectory
    }

    [Environment]::SetEnvironmentVariable(
        "Path",
        $newUserPath,
        "User"
    )

    Write-Host "Added Druim to your user PATH."
}
else {
    Write-Host "Druim is already on your user PATH."
}

$currentPathEntries = $env:Path.Split(
    ";",
    [System.StringSplitOptions]::RemoveEmptyEntries
)

$currentSessionHasPath = $currentPathEntries |
    Where-Object {
        $_.TrimEnd("\") -ieq $installDirectory.TrimEnd("\")
    }

if (-not $currentSessionHasPath) {
    $env:Path = "$env:Path;$installDirectory"
}

Write-Host ""
Write-Host "Druim installed to:"
Write-Host $installBinary
Write-Host ""

& $installBinary --version

Write-Host ""
Write-Host "Druim installation complete."